import dotenv from "dotenv";
import url from "url";
import express from "express";
import path from "path";
import http from "http";
import fileUpload from "express-fileupload";
import { BlobServiceClient } from "@azure/storage-blob";
import { streamToBuffer } from "./helpers/streamToBuffer.js";
import { MongoDB } from "./mongodb.js";

//Add refresh token for mongodb

dotenv.config();
const mongoUri = process.env.MONGO_URI || "";
const mongo = new MongoDB(mongoUri);
const port = process.env.PORT || 8080;
const app = express();
const __dirname = url.fileURLToPath(new URL("../../", import.meta.url));

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);

// app.get("/", (req, res) => {
//   res.sendFile(`${string}/index.html`);
//   res.send("Hello World");
// });

app.post("/get-image", async (req, res) => {
  const containerClient = blobServiceClient.getContainerClient("images");
  const blobClient = containerClient.getBlobClient(req.body);
  const downloadBlockBlobResponse = await blobClient.download();
  const downloaded = await streamToBuffer(
    downloadBlockBlobResponse.readableStreamBody
  );
  res.send(downloaded);
});

app.post(
  "/upload-image",
  fileUpload({ createParentPath: true }),
  async (req, res) => {
    if (req.files) {
      //@ts-ignore
      const buffer = req.files["imgFile"].data;
      const containerClient = blobServiceClient.getContainerClient("images");
      const blobName = "newblob" + Date.now();
      const blobClient = containerClient.getBlockBlobClient(blobName);
      const uploadBlobResponse = await blobClient.upload(buffer, buffer.length);
      const blobId = uploadBlobResponse.requestId;
      console.log(`Upload block blob ${blobName} successfully - ${blobId}`);
      res.send(`Upload block blob ${blobName} successfully - ${blobId}`);
    }
  }
);

app.post("/save-machine", async (req, res) => {
  const data = req.body;
  try {
    //Maybe refactor to findOneandUpdate
    if (data.id) await mongo.removeDoc(data.id, "machines");
    const insertedId = await mongo.insertDoc(data, "machines");
    const machines = Object.entries(data.data);
    const filteredAlerts = machines
      .map((machine) => {
        const [key, value] = machine as any;
        return value.alert === "true" ? value : null;
      })
      .filter((parts) => parts !== null);

    if (filteredAlerts.length) {
      console.log(data);
      filteredAlerts.forEach(async (alertData) => {
        const alert = {
          reportId: data.reportId,
          routeName: data.routeName,
          routeId: data.routeId,
          machineName: data.machineName,
          michlolName: data.michlolName,
          dateCreated: data.dateCreated,
          data: alertData,
        };
        const insertedId = await mongo.insertDoc(alert, "alerts");
        console.log(insertedId);
      });
      //For each filteredAlert create an alert and send to alert collection
    }
    // console.log(alert);
    res.status(200).send(insertedId.toString());
  } catch (e) {
    res.status(500).send("Error" + e);
  }
});

app.post("/save-report", async (req, res) => {
  const data = req.body;
  try {
    const insertedId = await mongo.insertDoc(data, "reports");
    res.status(200).send(insertedId.toString());
  } catch (e) {
    res.status(500).send("Error" + e);
  }
});

app.post("/delete-report", async (req, res) => {
  const id = req.body;
  try {
    await mongo.deleteReport(id);
    res.status(200).send("Report Deleted Successfully");
  } catch {
    res.status(500).send("Report Deletion Failed");
  }
});

app.post("/search-reports", async (req, res) => {
  const data = req.body;
  try {
    const results = await mongo.searchDocs(data, "reports");
    res.json(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/pull-report", async (req, res) => {
  const data = req.body;
  try {
    const results = await mongo.pullReport(data, "machines");
    res.json(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/get-alerts", async (req, res) => {
  try {
    const results = await mongo.getAlerts("alerts");
    res.json(results);
  } catch (e) {
    res.status(500).send(e);
  }
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
