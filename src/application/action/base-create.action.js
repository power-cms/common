"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const id_1 = require("../../domain/id/id");
const action_handler_1 = require("./action-handler");
class BaseCreateAction {
    constructor(handler, query) {
        this.handler = handler;
        this.query = query;
        this.name = 'create';
        this.type = action_handler_1.ActionType.CREATE;
    }
    async handle(action) {
        const id = id_1.Id.generate();
        await this.handler.handle({ ...action.data, id: id.toString() });
        return this.query.get(id);
    }
}
exports.BaseCreateAction = BaseCreateAction;
