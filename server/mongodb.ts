import { Collection, MongoClient } from "mongodb";
import { MachineData, ReportData } from "./server";

type CollectionIds = "reports" | "machines" | "alerts" | "routes";

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

  getCollection(id: CollectionIds): Collection {
    return this.client.db("icl").collection(id);
  }

  insertDoc(payload: MachineData | ReportData, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    return collection.insertOne(payload);
  }

  updateDoc(payload: MachineData, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    return collection.findOneAndReplace(
      { uniqueId: payload.uniqueId },
      payload
    );
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
      const find = collection.find({ reportId: id }).sort({ dateCreated: -1 });
      return find.toArray();
    }
    const find = collection.find().sort({ dateCreated: -1 });
    return find.toArray();
  }

  getAlerts(collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    const find = collection.find().sort({ dateCreated: 1 });
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
        dateCreated: { $gt: startDate, $lt: endDate },
      })
      .project({
        _id: 1,
        routeName: 1,
        reportId: 1,
        routeId: 1,
        dateCreated: 1,
      })
      .sort({ dateCreated: -1 });
    return find.toArray();
  }
}
