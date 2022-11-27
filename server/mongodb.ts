import { Collection, MongoClient, ObjectId } from "mongodb";

type CollectionIds = "reports" | "machines" | "alerts";

//Refactor to better handle thrown error. Each function can either return the promise which can res/rej or you handle the functions return and handle/throw based on that output

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

  insertDoc(payload: any, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    return collection.insertOne(payload);
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
    const find = collection.find({ reportId: id }).sort({ dateCreated: -1 });
    return find.toArray();
  }

  getAlerts(collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    const find = collection.find().sort({ dateCreated: 1 });
    return find.toArray();
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
      .project({ _id: 1, routeName: 1, reportId: 1, dateCreated: 1 })
      .sort({ dateCreated: -1 });
    return find.toArray();
  }
}
