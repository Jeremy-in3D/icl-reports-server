var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MongoClient } from "mongodb";
export class MongoDB {
    constructor(uri) {
        this.client = new MongoClient(uri);
        this.collection = this.client.db("icl").collection("reports");
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.close();
        });
    }
    pullDocs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const find = this.collection
                    .find({})
                    .project({ _id: 1, name: 1, dateUploaded: 1 })
                    .sort({ dateUploaded: -1 })
                    .limit(10);
                console.log(`Database was searched successfully`);
                return yield find.toArray();
            }
            catch (e) {
                console.log("Error", e);
            }
        });
    }
    searchDocs(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { startDate, endDate } = data;
            try {
                const find = this.collection
                    .find({
                    dateUploaded: { $gt: startDate, $lt: endDate },
                })
                    .project({ _id: 1, name: 1, dateUploaded: 1 })
                    .sort({ dateUploaded: -1 });
                console.log(`Database was searched successfully`);
                return yield find.toArray();
            }
            catch (e) {
                console.log("Error", e);
            }
        });
    }
    insertDoc(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const insert = yield this.collection.insertOne(payload);
                console.log(`A document was inserted with the _id: ${insert.insertedId}`);
            }
            catch (e) {
                console.log("Error", e);
            }
        });
    }
}
