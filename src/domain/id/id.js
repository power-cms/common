"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const id_generator_1 = require("./id.generator");
class Id {
    constructor(id) {
        this.id = id;
    }
    static fromString(id) {
        return new Id(id);
    }
    static generate() {
        return new Id(id_generator_1.generate());
    }
    toString() {
        return this.id;
    }
}
exports.Id = Id;
