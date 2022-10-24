require("dotenv").config();
const fs = require("fs");
const http = require("http");
// const https = require("https");
const express = require("express");
const path = require("path");
const MongoDB = require("./mongodb.js");

const mongo = new MongoDB(process.env.MONGO_URI);

const privateKey = fs.readFileSync("certs/server.key", "utf8");
const certificate = fs.readFileSync("certs/server.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };
const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.text());

app.get("/find-reports", async (req, res) => {
  try {
    await mongo.connect();
    const results = await mongo.findDocs();
    res.json(results);
  } catch (e) {
    res.status("500");
    res.send("Error", e);
  } finally {
    await mongo.client.close();
  }
});

app.post("/save-report", async (req, res) => {
  try {
    await mongo.connect();
    await mongo.insertDoc(req.body);
    res.send("Document Inserted Successfully");
  } catch (e) {
    res.status("500");
    res.send("Error", e);
  } finally {
    await mongo.close();
  }
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//---------------------HTTPS
// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist/index.html"));
// });

// const uri =
//   "mongodb+srv://in3dtech:in3dtech360@cluster0.9ynclka.mongodb.net/?retryWrites=true&w=majority";
