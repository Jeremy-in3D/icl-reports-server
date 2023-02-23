import dotenv from "dotenv";
import url from "url";
import express, { NextFunction } from "express";
import path from "path";
import http from "http";
import { BlobServiceClient } from "@azure/storage-blob";
import { streamToBuffer } from "./helpers/streamToBuffer.js";
import { MongoDB } from "./mongodb.js";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import dayjs from "dayjs";

//Client for pulling public key for use with verifying jwt
const JwksClient = jwksClient({
  jwksUri: "https://login.microsoftonline.com/common/discovery/v2.0/keys",
});

//Loads .env environment variables
dotenv.config();
//Load mongoClient
const mongoUri = process.env.MONGO_URI || "";
const mongo = new MongoDB(mongoUri);
//Initialize express
const port = process.env.PORT || 8080;
const app = express();
//Get relative path for static hosting
const __dirname = url.fileURLToPath(new URL("../../", import.meta.url));

//Express Middleware
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//Blob initilization for images saving in Azure
const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);

//Route to get image buffer and send to client
app.post("/get-image", async (req, res) => {
  const containerClient = blobServiceClient.getContainerClient("images");
  const blobClient = containerClient.getBlobClient(req.body);
  const downloadBlockBlobResponse = await blobClient.download();
  const downloaded = await streamToBuffer(
    downloadBlockBlobResponse.readableStreamBody
  );
  res.send(downloaded);
});

//Route to upload image
app.post("/upload-image", async (req, res) => {
  if (req.files) {
    //@ts-ignore
    const buffer = req.files["imgFile"].data;
    const containerClient = blobServiceClient.getContainerClient("images");
    const blobName = "blob-" + Date.now();
    const blobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blobClient.upload(buffer, buffer.length);
    const blobId = uploadBlobResponse.requestId;
    console.log(`Upload block blob ${blobName} successfully - ${blobId}`);
    res.send(`Upload block blob ${blobName} successfully - ${blobId}`);
  }
});

app.post("/save-machine", async (req, res) => {
  const data: MachineData = req.body;
  console.log(data);
  const dataToSave: ReportDataCurrent = {
    michlolName: data.michlolName,
    michlolId: data.michlolId,
    createdAt: dayjs().format(),
    data: data.data,
    user: data.user,
  };
  try {
    if (data.completed) {
      const updateCompletedMachinesInReports = await mongo.incValue(
        data.reportId,
        "reports"
      );
    }
    const updateMachines = await mongo.updateDoc(data, "machines");

    //Save machine to collection
    if (!updateMachines.value) await mongo.insertDoc(data, "machines");
    //Refactor to promise.all
    //Check if any of saved data raised an alert
    const machines = Object.entries(data.data);
    const filteredAlerts = machines
      .map((machine) => {
        const [key, value] = machine as any;
        return value.alert === "true" ? value : null;
      })
      .filter((parts) => parts !== null);
    if (filteredAlerts.length) {
      filteredAlerts.forEach(async (alertData) => {
        const alert = {
          uniqueId: data.uniqueId,
          reportId: data.reportId,
          routeName: data.routeName,
          routeId: data.routeId,
          machineName: data.machineName,
          michlolName: data.michlolName,
          michlolId: data.michlolId,
          createdAt: data.createdAt,
          completed: false,
          data: alertData,
          user: data.user,
        };
        await mongo.insertDoc(alert, "alerts");
      });
    }
    res.status(200).send();
  } catch (e) {
    res.status(500).send("Error" + e);
  }
});

app.get("/get-routes", async (req, res) => {
  const data: ReportData = req.body;
  try {
    const docs = await mongo.getDocs("", "routes");
    res.status(200).json(docs);
  } catch (e) {
    res.status(500).send("Error" + e);
  }
});

app.post("/create-report", async (req, res) => {
  const data: ReportData = req.body;
  try {
    const inserted = await mongo.insertDoc(data, "reports");
    res.status(200).send(inserted.insertedId.toString());
  } catch (e) {
    res.status(500).send("Error" + e);
  }
});

// app.post("/update-alert", async (req, res) => {
//   const data = req.body;
//   console.log("trying to update alert", data);
//   try {
//     await mongo.updateAlert(data, "alerts");
//     res.status(200).send();
//   } catch (e) {
//     res.status(500).send("Error" + e);
//   }
// });

//   DELETE REPORT

// app.post("/delete-report", async (req, res) => {
//   const id = req.body;
//   try {
//     const deleted = await mongo.removeDoc(id, "reports");
//     if (deleted) {
//       await mongo.removeDocs(id, "machines");
//       await mongo.removeDocs(id, "alerts");
//     }
//     res.status(200).send("Report deleted Successfully");
//   } catch {
//     res.status(500).send("Report Deletion Failed");
//   }
// });

app.post("/search-reports", async (req, res) => {
  const data = req.body;
  try {
    const reportHistoryresults = await mongo.searchDocs(
      data,
      "published_reports_directory"
    );
    // const machineHistoryResults = await mongo.searchDocs(data, "machines");

    res.status(200).json(reportHistoryresults);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/get-docs", async (req, res) => {
  console.log(typeof req.body, req.body);

  let value = req.body;
  if (typeof value == "string") {
    console.log("we in hereee");
    value = JSON.parse(value);
    console.log(value.reportId);
  }
  // const value = JSON.parse(req.body);
  const { reportId, isFromAlerts } = value || {};
  console.log(reportId);

  const reponseToSendForAlerts: any = {};
  if (!reportId) {
    console.log("why are we stuck hereeee");
    throw new Error("reportId is required");
  }
  try {
    const results = await mongo.getDocs(reportId, "machines");
    if (isFromAlerts) {
      const reportHistoryresults = await mongo.getDocs(
        reportId,
        "reports_history"
      );

      reponseToSendForAlerts.results = results;
      reponseToSendForAlerts.reportHistoryresults = reportHistoryresults;
    }

    const resultsToSend = isFromAlerts ? reponseToSendForAlerts : results;
    console.log(`Report queried successfully with id ${reportId}`);
    res.status(200).json(resultsToSend);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/get-alerts", async (req, res) => {
  try {
    const results = await mongo.getAlerts("alerts");
    res.status(200).json(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/get-current-reports", async (req, res) => {
  const currentReports = await mongo.getDocs("", "reports");
  res.status(200).send(currentReports);
});

app.post("/publish-report", async (req, res) => {
  const reports = req.body;

  if (!reports || !reports.length) {
    console.log("never made it out of the return");
    return;
  }

  const publishedAt = dayjs().format();

  const publishedReportReference = reports.map((report: any) => {
    return {
      type: report.type,
      date: report.date,
      createdAt: report.createdAt,
      reportId: report.reportId,
      routeName: report.routeName,
      routeId: report.routeId,
      completedMachines: report.completedMachines,
    };
  });

  reports.forEach((report: any) => {
    delete report._id;
    report.publishedAt = publishedAt;
  });
  try {
    const publishReports = await mongo.insertMany(reports, "reports_history");

    if (publishReports.acknowledged === true) {
      await mongo.insertDoc(
        { publishedAt, publishedReport: publishedReportReference },
        "published_reports_directory"
      );

      await mongo.clearCollection("reports");
    }
    res.status(200).send(publishReports);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/get-published-report", async (req, res) => {
  const resToSend: any = {};

  const { report, route } = req.body;

  if (!report || !route) return;

  const getRouteNameAndIdForReport = report.publishedReport.map(
    async (routeFromPublishedReport: any, index: Number) => {
      if (route == routeFromPublishedReport.routeName) {
        const reportFromReportHistory = await mongo.find(
          { reportId: routeFromPublishedReport.reportId },
          "reports_history"
        );
        const machinesForReport = await mongo.getDocs(
          routeFromPublishedReport.reportId,
          "machines"
        );

        resToSend.reportFromReportHistory = reportFromReportHistory[0];
        resToSend.machinesForReport = machinesForReport;
      }
    }
  );

  await Promise.all(getRouteNameAndIdForReport);

  res.status(200).send(resToSend);
});

(async () => {
  try {
    await mongo.connect();
    const httpServer = http.createServer(app);
    httpServer.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (e) {
    console.log("Error", e);
  }
})();

//Validate JWT Token Middlware
async function validateJwt(req: any, res: any, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    try {
      const accessToken = req.headers.authorization.split(" ")[1];
      const decode = jwt.decode(accessToken, { complete: true });
      const key = await JwksClient.getSigningKey(decode?.header.kid);
      const signingKey = key.getPublicKey();
      jwt.verify(accessToken, signingKey);
      next();
    } catch (e) {
      res.status(400).send("Invalid JWT Validation");
    }
  } else {
    res.status(401).send("No authorization token provided");
  }
}

export interface PublishedReportDirectory {
  publishedAt: string;
  publishedReport: PublishPrep[];
}

type PublishPrep = {
  type: string;
  date: string;
  createdAt: string;
  reportId: string;
  routeName: string;
  routeId: string;
};

export type ReportDataCurrent = {
  michlolName: string | undefined;
  michlolId: string | undefined;
  createdAt: string | object;
  data: any;
  user?: User;
};

export type MachineData = {
  uniqueId: string;
  reportId: string;
  routeName: string;
  routeId: string;
  michlolName: string | undefined;
  michlolId: string | undefined;
  machineName: string;
  createdAt: number | null;
  data: {
    [partName: string]: FormSubmission;
  };
  user?: User;
  completed?: boolean;
  isFromPublishedReport?: string | number | boolean;
};

type FormSubmission = {
  [id: string]: FormDataEntryValue;
  excelOutput: string;
  alert: string;
};

export type ReportData = {
  createdAt: number;
  routeId: string;
  routeName: string;
  reportId: string;
};

type User = {
  name: string;
  username: string;
};
