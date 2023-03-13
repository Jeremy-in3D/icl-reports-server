import { blobServiceClient } from "../../server.js";
import { streamToBuffer } from "../../helpers/streamToBuffer.js";
import fs from "fs";

export async function getImage(req: any, res: any) {
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
    res.sendStatus(500);
  }
}

export async function uploadImage(req: any, res: any) {
  const containerName = "icl-reports-blob";
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const file = req.file;

  const { reportId } = req.body;

  if (!file) {
    res.sendStatus(500);
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
    res.sendStatus(500);
  }
}
