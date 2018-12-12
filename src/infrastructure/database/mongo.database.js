"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
exports.createDatabaseConnection = async () => {
    const mongoClient = await mongodb_1.MongoClient.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`, { useNewUrlParser: true });
    return mongoClient.db(process.env.DB_DATABASE);
};
