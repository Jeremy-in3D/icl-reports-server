import { mongo } from "../../server.js";

export async function getAlerts(req: any, res: any) {
  try {
    const results = await mongo.getAlerts("alerts");
    res.status(200).json(results);
  } catch (e) {
    res.status(500).send(e);
  }
}
