"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_handler_1 = require("./action-handler");
class BaseDeleteAction {
    constructor(handler) {
        this.handler = handler;
        this.name = 'delete';
        this.type = action_handler_1.ActionType.DELETE;
    }
    async handle(action) {
        await this.handler.handle({ id: action.params.id });
    }
}
exports.BaseDeleteAction = BaseDeleteAction;
