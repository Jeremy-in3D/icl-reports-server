const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const path = require("path");
const MongoDB = require("./mongodb.js");

const privateKey = fs.readFileSync("certs/server.key", "utf8");
const certificate = fs.readFileSync("certs/server.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };
const port = process.env.PORT || 8080;

const app = express();

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist/index.html"));
// });

const uri =
  "mongodb+srv://in3dtech:in3dtech360@cluster0.9ynclka.mongodb.net/?retryWrites=true&w=majority";

const mongo = new MongoDB(uri);

app.post("/save-report", async (req, res) => {
  try {
    await mongo.action("insert", req.body);
  } catch (e) {
    console.log("Error", e);
  } finally {
    res.send("Inserted Document");
  }
});
