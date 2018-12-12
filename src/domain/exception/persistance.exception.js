"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_exception_1 = require("./domain.exception");
class PersistanceException extends domain_exception_1.DomainException {
    static fromError(error) {
        return new PersistanceException(`Persistance exception: ${error.message}`);
    }
}
exports.PersistanceException = PersistanceException;
