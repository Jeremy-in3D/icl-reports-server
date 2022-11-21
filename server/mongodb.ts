import { Collection, MongoClient, ObjectId } from "mongodb";

type CollectionIds = "reports" | "machines";

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
    await collection.deleteOne({ _id: new ObjectId(id) });
    console.log(`Document was removed with the _id: ${id}`);
  }

  async removeDocs(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    const remove = await collection.deleteMany({
      reportId: id,
    });
    console.log(
      `${remove.deletedCount} documents were removed with the _id: ${id} `
    );
  }

  async deleteReport(id: string) {
    await this.removeDoc(id, "reports");
    await this.removeDocs(id, "machines");
    console.log(`Report deleted successfully`);
  }

  async pullReport(id: string, collectionId: CollectionIds) {
    const collection = this.getCollection(collectionId);
    const find = collection.find({ reportId: id }).sort({ dateCreated: -1 });
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
      .project({ _id: 1, name: 1, dateCreated: 1, reportId: 1 })
      .sort({ dateCreated: -1 });
    console.log(`Database was searched successfully`);
    return await find.toArray();
  }
}
