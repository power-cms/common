"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCreateCommandHandler {
    constructor(repository) {
        this.repository = repository;
    }
    async handle(command) {
        const dto = this.transform(command);
        await this.repository.create(dto);
    }
}
exports.BaseCreateCommandHandler = BaseCreateCommandHandler;
