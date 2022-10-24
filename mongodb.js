const { MongoClient } = require("mongodb");

module.exports = class MongoDB {
  constructor(uri) {
    this.client = new MongoClient(uri);
    this.collection = this.client.db("icl").collection("reports");
  }

  async connect() {
    await this.client.connect();
  }

  async close() {
    await this.client.close();
  }

  async findDocs() {
    try {
      const find = this.collection
        .find({})
        .project({ _id: 1, name: 1, dateUploaded: 1 })
        .sort({ dateUploaded: -1 });
      return await find.toArray();
      // console.log(`A document was inserted with the _id: ${insert.insertedId}`);
    } catch (e) {
      console.log("Error", e);
    }
  }

  async insertDoc(payload) {
    try {
      const insert = await this.collection.insertOne(payload);
      console.log(`A document was inserted with the _id: ${insert.insertedId}`);
    } catch (e) {
      console.log("Error", e);
    }
  }
};
