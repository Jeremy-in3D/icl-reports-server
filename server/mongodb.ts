import { Collection, MongoClient } from "mongodb";
import { MachineData, ReportData, ReportDataCurrent } from "./server";

type CollectionIds =
  | "reports"
  | "machines"
  | "alerts"
  | "routes"
  | "reports_history";

type RouteName = string | number;
type MachineName = string | number;
interface UpdateDocAdjustedParams {
  payload: ReportDataCurrent;
  collectionId: CollectionIds;
  routeName: RouteName;
  key: MachineName;
}

export class MongoDB {
  client: MongoClient;

  constructor(uri: string) {
    this.client = new MongoClient(uri);
  }

  connect() {
    return this.client.connect();
  }

  close() {
    return this.client.close();
  }

  //This makes the collection your are querying more dynamic in individual endpoints
  getCollection(id: CollectionIds): Collection {
    return this.client.db("icl").collection(id);
  }

  insertDoc(payload: MachineData | ReportData, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    return collection.insertOne(payload);
  }

  updateDoc(payload: MachineData, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    //@ts-ignore //TO DO: Remove the _id from being sent with an existing machine data in first place
    const { _id, ...rest } = payload;
    return collection.findOneAndReplace(
      { uniqueId: payload.uniqueId },
      { ...rest }
    );
  }

  // FOR UPDATING SPECIFIC DOCS, NOT REPLACING

  updateDocAdjusted({
    payload,
    collectionId,
    routeName,
    key,
  }: UpdateDocAdjustedParams) {
    if (!payload) {
      return;
    }
    const collection = this.getCollection(collectionId);
    return collection.findOneAndUpdate(
      { routeName },
      { $set: { [key]: payload } },
      { upsert: true }
    );
  }

  find(identifier: any, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId)
      .find(identifier)
      .toArray();
    return collection;
  }

  removeDoc(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    return collection.deleteOne({ reportId: id });
  }

  removeDocs(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    return collection.deleteMany({ reportId: id });
  }

  getDocs(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    if (id.length) {
      const find = collection.find({ reportId: id }).sort({ createdAt: -1 });
      return find.toArray();
    }
    const find = collection.find().sort({ createdAt: -1 });
    return find.toArray();
  }

  getAlerts(collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    const find = collection.find().sort({ createdAt: 1 });
    return find.toArray();
  }

  updateAlert(
    payload: { uniqueId: string; completed: boolean },
    collectionId: CollectionIds
  ) {
    const collection = this.getCollection(collectionId);
    return collection.findOneAndUpdate(
      { uniqueId: payload.uniqueId },
      { $set: { completed: payload.completed } }
    );
  }

  searchDocs(
    data: { startDate: number; endDate: number },
    collectionId: CollectionIds
  ) {
    const { startDate, endDate } = data;
    const collection = this.getCollection(collectionId);
    const find = collection
      .find({
        createdAt: { $gt: startDate, $lt: endDate },
      })
      .sort({ createdAt: -1 });
    return find.toArray();
  }
}
