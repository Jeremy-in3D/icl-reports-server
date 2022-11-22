import { Collection, MongoClient, ObjectId } from "mongodb";

type CollectionIds = "reports" | "machines";

//Refactor to better handle thrown error. Each function can either return the promise which can res/rej or you handle the functions return and handle/throw based on that output

export class MongoDB {
  client: MongoClient;

  constructor(uri: string) {
    this.client = new MongoClient(uri);
  }

  async connect() {
    await this.client.connect();
  }

  async close() {
    await this.client.close();
  }

  getCollection(id: CollectionIds): Collection {
    return this.client.db("icl").collection(id);
  }

  async insertDoc(payload: any, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    const insert = await collection.insertOne(payload);
    console.log(`A document was inserted with the _id: ${insert.insertedId}`);
    return insert.insertedId;
  }

  async removeDoc(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    try {
      await collection.deleteOne({ reportId: id });
      console.log(`Document was removed with the reportId: ${id}`);
    } catch (e) {
      console.log("Error", e);
    }
  }

  async removeDocs(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    try {
      const remove = await collection.deleteMany({
        reportId: id,
      });
      console.log(
        `${remove.deletedCount} documents were removed with the reportId: ${id} `
      );
    } catch (e) {
      console.log("Error", e);
    }
  }

  async deleteReport(id: string) {
    await this.removeDoc(id, "reports");
    await this.removeDocs(id, "machines");
    console.log(`Report deleted successfully`);
  }

  async pullReport(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    const find = collection.find({ reportId: id }).sort({ dateCreated: -1 });
    console.log(`Report queried successfully`);
    return await find.toArray();
  }

  async searchDocs(
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
    console.log(`Database was searched successfully`);
    return await find.toArray();
  }
}
