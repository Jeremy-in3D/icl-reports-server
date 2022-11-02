require("dotenv").config();
// const fs = require("fs");
const http = require("http");
const express = require("express");
const path = require("path");
const { BlobServiceClient } = require("@azure/storage-blob");
const sampleData = require("./assets/test-data.json");
const MongoDB = require("./mongodb.js");
const mongo = new MongoDB(process.env.MONGO_URI);

const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.text());

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

const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
// Note - Account connection string can only be used in node.
const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);

(async () => {
  try {
    // await mongo.connect();
    let i = 1;
    for await (const container of blobServiceClient.listContainers()) {
      console.log(`Container ${i++}: ${container.name}`);
    }
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
