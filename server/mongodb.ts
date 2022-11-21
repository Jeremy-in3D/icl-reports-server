import { Collection, MongoClient, ObjectId } from "mongodb";

export class MongoDB {
  client: MongoClient;
  machines: Collection;
  reports: Collection;

  constructor(uri: string) {
    this.client = new MongoClient(uri);
    this.machines = this.client.db("icl").collection("machines");
    this.reports = this.client.db("icl").collection("reports");
  }

  async connect() {
    await this.client.connect();
  }

  async close() {
    await this.client.close();
  }

  async pullDocs() {
    try {
      const find = this.reports
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
      const find = this.reports
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
    const insert = await this.machines.insertOne(payload);
    console.log(
      `A machine document was inserted with the _id: ${insert.insertedId}`
    );
    return insert.insertedId;
  }

  async removeDoc(id: string) {
    const remove = await this.machines.deleteOne({ _id: new ObjectId(id) });
    console.log(
      `${remove.deletedCount} machine document was removed with the _id: ${id} `
    );
  }

  async insertReport(payload: any) {
    const insert = await this.reports.insertOne(payload);
    console.log(
      `A report document was inserted with the _id: ${insert.insertedId}`
    );
    return insert.insertedId;
  }

  async removeReport(id: string) {
    const remove = await this.reports.deleteOne({ _id: new ObjectId(id) });
    console.log(
      `${remove.deletedCount} report document was removed with the _id: ${id} `
    );
  }
}
