import { mongo } from "../../server.js";

export async function getRoutes(req: any, res: any) {
  try {
    const docs = await mongo.getDocs("", "routes");
    res.status(200).json(docs);
  } catch (e) {
    res.status(500).send("Error" + e);
  }
}
