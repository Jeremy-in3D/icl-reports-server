import dotenv from "dotenv";
import url from "url";
import express, { NextFunction } from "express";
import path from "path";
import http from "http";
import { BlobServiceClient } from "@azure/storage-blob";
// import { streamToBuffer } from "./helpers/streamToBuffer.js";
import { MongoDB } from "./mongodb.js";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
// import dayjs from "dayjs";
// import fs from "fs";
import multer from "multer";
import cors from "cors";
import helmet from "helmet";
import { getRoutes } from "./routes/getRoutes/index.js";
import { saveMachine } from "./routes/saveMachine/index.js";
import { createReport } from "./routes/createReport/index.js";
import { updateAlert } from "./routes/updateAlert/index.js";
import { deleteReport } from "./routes/deleteReport/index.js";
import { searchReports } from "./routes/searchReports/searchReports.js";
import { getImage, uploadImage } from "./routes/handleImages/index.js";
import { getDocs } from "./routes/getDocs/index.js";
import { getAlerts } from "./routes/getAlerts/index.js";
import { publishReport } from "./routes/publishReport/index.js";
import { getCurrentReport } from "./routes/getCurrentReport/index.js";
import { getPublishedReport } from "./routes/getPublishedReport/index.js";
import { downloadReport } from "./routes/downloadReport/index.js";

//Client for pulling public key for use with verifying jwt
const JwksClient = jwksClient({
  jwksUri: "https://login.microsoftonline.com/common/discovery/v2.0/keys",
});

dotenv.config();

const mongoUri = process.env.MONGO_URI || "";
export const mongo = new MongoDB(mongoUri);

const port = process.env.PORT || 8080;
const app = express();

//Get relative path for static hosting
const __dirname = url.fileURLToPath(new URL("../../", import.meta.url));

//Express Middleware
app.use(cors());
app.use(
  helmet({
    referrerPolicy: { policy: "unsafe-url" },
  })
);
app.use(express.static(path.join(__dirname, "dist")));
app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:8080"];
  const origin = req.headers?.origin || "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//Blob initilization for images saving in Azure
const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
export const blobServiceClient = BlobServiceClient.fromConnectionString(
  BLOB_CONNECTION_STRING
);
const upload = multer({ dest: "uploads/" });

app.post("/get-image", async (req, res) => getImage(req, res));

app.post("/upload-image", upload.single("imgFile"), async (req, res) =>
  uploadImage(req, res)
);

app.post("/save-machine", async (req, res) => saveMachine(req, res));

app.get("/get-routes", async (req, res) => getRoutes(req, res));

app.post("/create-report", async (req, res) => createReport(req, res));

app.post("/update-alert", async (req, res) => updateAlert(req, res));

app.post("/delete-report", async (req, res) => deleteReport(req, res));

app.post("/search-reports", async (req, res) => searchReports(req, res));

app.post("/get-docs", async (req, res) => getDocs(req, res));

app.get("/get-alerts", async (req, res) => getAlerts(req, res));

app.post("/get-current-reports", async (req, res) =>
  getCurrentReport(req, res)
);

app.post("/publish-report", async (req, res) => publishReport(req, res));

app.post("/get-published-report", async (req, res) =>
  getPublishedReport(req, res)
);

app.post("/download-report", async (req, res) => downloadReport(req, res));

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
  alertFromHmi?: { previousVal: number; currentVal: number };
  alertFromDeteriorate?: { previousVal: Number; currentVal: Number };
  uniqueId: string;
  reportId: string;
  routeName: string;
  routeId: string;
  michlolName: string | undefined;
  michlolId: string | undefined;
  machineName: string;
  createdAt: number | null | string;
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
