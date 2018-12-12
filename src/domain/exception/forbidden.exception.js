"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_exception_1 = require("./domain.exception");
class ForbiddenException extends domain_exception_1.DomainException {
    static create() {
        return new ForbiddenException('You are not authorized to perform this action.');
    }
    constructor(message) {
        super(message);
    }
}
exports.ForbiddenException = ForbiddenException;
