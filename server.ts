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
import fs from "fs";
import multer from "multer";

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
var cors = require("cors");
//Get relative path for static hosting
const __dirname = url.fileURLToPath(new URL("../../", import.meta.url));

//Express Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//Blob initilization for images saving in Azure
const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);
const upload = multer({ dest: "uploads/" });

//Route to get image buffer and send to client
app.post("/get-image", async (req, res) => {
  try {
    const containerName = "icl-reports-blob";
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(`${req.body}_image.png`);
    const downloadBlockBlobResponse = await blobClient.download();
    const downloaded = await streamToBuffer(
      downloadBlockBlobResponse.readableStreamBody
    );
    res.send(downloaded);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Route to upload image
app.post("/upload-image", upload.single("imgFile"), async (req, res) => {
  const containerName = "icl-reports-blob";
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const file = req.file;

  const { reportId } = req.body;

  if (!file) {
    console.log("tooo bad, no fiule!");
    res.sendStatus(400);
    return;
  }

  const blobName = `${reportId}_image.png`;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    const data = await fs.promises.readFile(file.path);
    await blockBlobClient.uploadData(data);
    // Clean up the temporary file
    await fs.promises.unlink(file.path);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/save-machine", async (req, res) => {
  const data: MachineData = req.body;
  // const dataToSave: ReportDataCurrent = {
  //   michlolName: data.michlolName,
  //   michlolId: data.michlolId,
  //   createdAt: dayjs().format(),
  //   data: data.data,
  //   user: data.user,
  // };
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
          lastEditBy: data.lastEditBy,
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
  let value = req.body;
  if (typeof value == "string") {
    value = JSON.parse(value);
  }

  const { reportId, isFromAlerts, isAlertFromCurrentReport, isShowFullReport } =
    value || {};
  const reponseToSendForAlerts: any = {};

  if (!reportId) {
    throw new Error("reportId is required");
  }

  try {
    const results = await mongo.getDocs(reportId, "machines");

    if (isFromAlerts) {
      if (isAlertFromCurrentReport && isShowFullReport) {
        const routesToReturn = await mongo.getDocs("", "reports");
        reponseToSendForAlerts.reportHistoryResults = routesToReturn;
      }

      if (isAlertFromCurrentReport && !isShowFullReport) {
        const relevantReport = await mongo.findGeneric({ reportId }, "reports");
        reponseToSendForAlerts.reportHistoryResults = relevantReport[0];
      }

      if (!isAlertFromCurrentReport && isShowFullReport) {
        const publishedReportFromAlert = await mongo.findGeneric(
          {
            publishedReport: {
              $elemMatch: { reportId },
            },
          },
          "published_reports_directory"
        );
        reponseToSendForAlerts.reportHistoryResults = publishedReportFromAlert;
      }

      if (!isAlertFromCurrentReport && !isShowFullReport) {
        const relevantReport = await mongo.findGeneric(
          { reportId },
          "reports_history"
        );
        reponseToSendForAlerts.reportHistoryResults = relevantReport[0];
      }

      reponseToSendForAlerts.results = results;
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
  const { reports, user } = req.body || {};

  if (!reports || !reports.length) {
    console.log("never made it out of the return");
    return;
  }

  const publishedAt = dayjs().format();

  const publishedReportReference = reports?.map((report: any) => {
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

  reports?.forEach((report: any) => {
    delete report._id;
    report.publishedAt = publishedAt;
    report.publishedBy = user.username;
  });
  try {
    const publishReports = await mongo.insertMany(reports, "reports_history");

    if (publishReports.acknowledged === true) {
      await mongo.insertDoc(
        {
          publishedBy: user.username,
          publishedAt,
          publishedReport: publishedReportReference,
        },
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

app.post("/download-report", async (req, res) => {
  let publishedReport;
  const reportIds: any[] = [];
  const resToSend: any = {};
  try {
    if (typeof req.body === "string") {
      publishedReport = JSON.parse(req.body);
    } else {
      publishedReport = req.body;
    }
    // console.log("our published report! ", publishedReport);
    if (!publishedReport || !publishedReport.length) {
      return;
    }
    publishedReport.forEach((report: any) => reportIds.push(report.reportId));
    // const reportFromReportHistory = await mongo.SearchForMultipleDocs(
    //   reportIds,
    //   "reports_history"
    // );
    const machinesForReport = await mongo.SearchForMultipleDocs(
      reportIds,
      "machines"
    );

    machinesForReport.forEach((machine) => {
      const engineeringReport = ['דו"ח רעידות', 'דו"ח מערכת שמן'];
      const machineToSend = {
        routeName: machine.routeName,
        lastEditBy: machine.lastEditBy?.name,
        equipmentUnit: machine.equipmentUnit,
        data: machine.data,
        michlolName: machine.machlolName,
        completed: machine.completed,
        surveyType: engineeringReport.includes(machine.routeName)
          ? "engineering"
          : "survey",
      };
      resToSend[machine.routeName] = machineToSend;
    });

    res.status(200).send(resToSend);
  } catch {}
  // const currentReports = await mongo.getDocs("", "reports");
  // res.status(200).send(resToSend);
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
  publishedBy?: string;
  lastEditBy?: User;
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
