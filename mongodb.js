const { MongoClient } = require("mongodb");

module.exports = class MongoDB {
  constructor(uri) {
    this.client = new MongoClient(uri);
    this.collection = this.client.db("icl").collection("reports");
  }

  async action(type, payload) {
    try {
      await this.client.connect();
      console.log("Connected successfully to server");
      if (type === "insert") await this.insertDoc(payload);
    } catch (e) {
      console.log("Error", e);
    } finally {
      await this.client.close();
      console.log("Connection to server closed successfully");
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
