"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalid_argument_exception_1 = require("./invalid-argument.exception");
class ValidationException extends invalid_argument_exception_1.InvalidArgumentException {
    constructor(message, details) {
        super(message);
        this.details = details;
    }
    static fromJoiError(error) {
        const details = error.details.map((detail) => ({
            path: detail.path.join('.'),
            message: detail.type
        }));
        return new ValidationException('Validation error', details);
    }
}
exports.ValidationException = ValidationException;
