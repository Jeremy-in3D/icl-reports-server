const fs = require("fs");
const https = require("https");
const express = require("express");
const path = require("path");

const privateKey = fs.readFileSync("certs/server.key", "utf8");
const certificate = fs.readFileSync("certs/server.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };
const port = process.env.PORT || 8080;

const app = express();

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

app.use(express.static(path.join(__dirname, "dist")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist/index.html"));
// });
