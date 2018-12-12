"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bson_1 = require("bson");
exports.generate = () => {
    return new bson_1.ObjectID().toHexString();
};
