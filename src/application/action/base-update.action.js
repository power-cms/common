"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const id_1 = require("../../domain/id/id");
const action_handler_1 = require("./action-handler");
class BaseUpdateAction {
    constructor(handler, query) {
        this.handler = handler;
        this.query = query;
        this.name = 'update';
        this.type = action_handler_1.ActionType.UPDATE;
    }
    async handle(action) {
        const id = action.params.id;
        await this.handler.handle({ id, ...action.data });
        return this.query.get(id_1.Id.fromString(id));
    }
}
exports.BaseUpdateAction = BaseUpdateAction;
