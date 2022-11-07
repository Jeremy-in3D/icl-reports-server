require("dotenv").config();
const path = require("path");
const http = require("http");
const express = require("express");
const fileUpload = require("express-fileupload");
const { BlobServiceClient } = require("@azure/storage-blob");
const streamToBuffer = require("./server/helpers/streamToBuffer.js");
const MongoDB = require("./server/mongodb.js");
const mongo = new MongoDB(process.env.MONGO_URI);

const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist/index.html"));
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
    const buffer = req.files["imgFile"].data;
    const containerClient = blobServiceClient.getContainerClient("images");
    const blobName = "newblob" + Date.now();
    const blobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blobClient.upload(buffer, buffer.length);
    const blobId = uploadBlobResponse.requestId;
    console.log(`Upload block blob ${blobName} successfully - ${blobId}`);
    res.send(`Upload block blob ${blobName} successfully - ${blobId}`);
  }
);

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
    await mongo.connect();
    const httpServer = http.createServer(app);
    httpServer.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (e) {
    console.log("Error", e);
  }
})();

//---------------------HTTPS
// const privateKey = fs.readFileSync("certs/server.key", "utf8");
// const certificate = fs.readFileSync("certs/server.crt", "utf8");
// const credentials = { key: privateKey, cert: certificate };

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// MONGO_URI =
//   "mongodb+srv://in3dtech:in3dtech360@cluster0.9ynclka.mongodb.net/?retryWrites=true&w=majority";
