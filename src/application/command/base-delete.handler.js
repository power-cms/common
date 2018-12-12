"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseDeleteCommandHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(command) {
        const id = this.getId(command);
        this.repository.delete(id);
    }
}
exports.BaseDeleteCommandHandler = BaseDeleteCommandHandler;
