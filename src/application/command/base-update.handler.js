"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseUpdateCommandHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(command) {
        const dto = this.transform(command);
        await this.repository.update(dto);
    }
}
exports.BaseUpdateCommandHandler = BaseUpdateCommandHandler;
