"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bson_1 = require("bson");
exports.ObjectIDFactory = {
    fromDomainId: (id) => {
        return new bson_1.ObjectID(id.toString());
    },
    fromString: (id) => {
        return new bson_1.ObjectID(id);
    }
};
