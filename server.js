require("dotenv").config();
const fs = require("fs");
const http = require("http");
const express = require("express");
const path = require("path");
const { BlobServiceClient } = require("@azure/storage-blob");
const sampleData = require("./assets/test-data.json");
const MongoDB = require("./server/mongodb.js");
const mongo = new MongoDB(process.env.MONGO_URI);
const streamToBuffer = require("./server/helpers/streamToBuffer.js");
const { Buffer } = require("node:buffer");
const { Stream } = require("stream");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.text());

const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);

app.post("/upload-blob", async (req, res) => {
  // const buffer = Buffer.from(req.body);
  // const blob = new Blob([req.body]);
  // const arrayBuffer = await blob.arrayBuffer();
  // const buffer = Buffer.from(arrayBuffer);
  const containerClient = blobServiceClient.getContainerClient("images");
  const blobName = "newblob" + Date.now();
  const blobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blobClient.uploadStream(
    buffer,
    buffer.length
  );
  const blobId = uploadBlobResponse.requestId;
  console.log(`Upload block blob ${blobName} successfully - ${blobId}`);
  res.send(`Upload block blob ${blobName} successfully - ${blobId}`);
});

app.post("/get-blob", async (req, res) => {
  const containerClient = blobServiceClient.getContainerClient("images");
  const blobClient = containerClient.getBlobClient(req.body);
  const buffer = await blobClient.downloadToBuffer();
  res.send(buffer);
});

app.get("/export-report", (req, res) => {
  res.send(sampleData);
});

app.get("/pull-reports", async (req, res) => {
  try {
    const results = await mongo.pullDocs();
    res.json(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/search-reports", async (req, res) => {
  const data = JSON.parse(req.body);
  try {
    const results = await mongo.searchDocs(data);
    res.json(results);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/save-report", async (req, res) => {
  try {
    await mongo.insertDoc(req.body);
    res.send("Document Inserted Successfully");
  } catch (e) {
    res.status(500).send(e);
  }
});

(async () => {
  try {
    // await mongo.connect();
    const httpServer = http.createServer(app);
    httpServer.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (e) {
    console.log("Error", e);
  }
})();

//Add connection referesh for mongodb
//---------------------HTTPS
// const privateKey = fs.readFileSync("certs/server.key", "utf8");
// const certificate = fs.readFileSync("certs/server.crt", "utf8");
// const credentials = { key: privateKey, cert: certificate };

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist/index.html"));
// });

// const uri =
//   "mongodb+srv://in3dtech:in3dtech360@cluster0.9ynclka.mongodb.net/?retryWrites=true&w=majority";

// MONGO_URI =
//   "mongodb+srv://in3dtech:in3dtech360@cluster0.9ynclka.mongodb.net/?retryWrites=true&w=majority";
// BLOB_CONNECTION_STRING =
//   "BlobEndpoint=https://iclreports.blob.core.windows.net/;QueueEndpoint=https://iclreports.queue.core.windows.net/;FileEndpoint=https://iclreports.file.core.windows.net/;TableEndpoint=https://iclreports.table.core.windows.net/;SharedAccessSignature=sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2022-11-02T16:44:26Z&st=2022-11-02T08:44:26Z&spr=https,http&sig=i51%2ByquhN6St9VXrOZUMYe%2FGB6JZEThCbczQ8wAjslw%3D";
