var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as dotenv from "dotenv";
import express from "express";
import path from "path";
import http from "http";
import fileUpload from "express-fileupload";
import { BlobServiceClient } from "@azure/storage-blob";
import { streamToBuffer } from "./helpers/streamToBuffer.js";
import { MongoDB } from "./mongodb.js";
dotenv.config();
const mongoUri = process.env.MONGO_URI || "";
const mongo = new MongoDB(mongoUri);
const port = process.env.PORT || 8080;
const app = express();
const __dirname = new URL("../../", import.meta.url);
console.log(__dirname);
console.log(path.join(__dirname.pathname, "dist"));
app.use(express.static(path.join(__dirname.href, "dist")));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
const BLOB_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING || "";
const blobServiceClient = BlobServiceClient.fromConnectionString(BLOB_CONNECTION_STRING);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist/index.html"));
// });
app.post("/get-image", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const containerClient = blobServiceClient.getContainerClient("images");
    const blobClient = containerClient.getBlobClient(req.body);
    const downloadBlockBlobResponse = yield blobClient.download();
    const downloaded = yield streamToBuffer(downloadBlockBlobResponse.readableStreamBody);
    res.send(downloaded);
}));
app.post("/upload-image", fileUpload({ createParentPath: true }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.files) {
        //@ts-ignore
        const buffer = req.files["imgFile"].data;
        const containerClient = blobServiceClient.getContainerClient("images");
        const blobName = "newblob" + Date.now();
        const blobClient = containerClient.getBlockBlobClient(blobName);
        const uploadBlobResponse = yield blobClient.upload(buffer, buffer.length);
        const blobId = uploadBlobResponse.requestId;
        console.log(`Upload block blob ${blobName} successfully - ${blobId}`);
        res.send(`Upload block blob ${blobName} successfully - ${blobId}`);
    }
}));
app.get("/export-report", (req, res) => {
    res.send("1234");
});
app.get("/pull-reports", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield mongo.pullDocs();
        res.json(results);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
app.post("/search-reports", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = JSON.parse(req.body);
    try {
        const results = yield mongo.searchDocs(data);
        res.json(results);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
app.post("/save-report", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongo.insertDoc(req.body);
        res.send("Document Inserted Successfully");
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongo.connect();
        const httpServer = http.createServer(app);
        httpServer.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    }
    catch (e) {
        console.log("Error", e);
    }
}))();
