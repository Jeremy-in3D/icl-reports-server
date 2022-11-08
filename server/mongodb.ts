import { Collection, MongoClient } from "mongodb";

export class MongoDB {
  client: MongoClient;
  collection: Collection;

  constructor(uri: string) {
    this.client = new MongoClient(uri);
    this.collection = this.client.db("icl").collection("reports");
  }

  async connect() {
    await this.client.connect();
  }

  async close() {
    await this.client.close();
  }

  async pullDocs() {
    try {
      const find = this.collection
        .find({})
        .project({ _id: 1, name: 1, dateUploaded: 1 })
        .sort({ dateUploaded: -1 })
        .limit(10);
      console.log(`Database was searched successfully`);
      return await find.toArray();
    } catch (e) {
      console.log("Error", e);
    }
  }

  async searchDocs(data: { startDate: number; endDate: number }) {
    const { startDate, endDate } = data;
    try {
      const find = this.collection
        .find({
          dateUploaded: { $gt: startDate, $lt: endDate },
        })
        .project({ _id: 1, name: 1, dateUploaded: 1 })
        .sort({ dateUploaded: -1 });
      console.log(`Database was searched successfully`);
      return await find.toArray();
    } catch (e) {
      console.log("Error", e);
    }
  }

  async insertDoc(payload: any) {
    try {
      const insert = await this.collection.insertOne(payload);
      console.log(`A document was inserted with the _id: ${insert.insertedId}`);
    } catch (e) {
      console.log("Error", e);
    }
  }
}
