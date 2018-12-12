"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const id_1 = require("../../domain/id/id");
const action_handler_1 = require("./action-handler");
class BaseReadAction {
    constructor(query) {
        this.query = query;
        this.name = 'read';
        this.type = action_handler_1.ActionType.READ;
    }
    handle(action) {
        return this.query.get(id_1.Id.fromString(action.params.id));
    }
}
exports.BaseReadAction = BaseReadAction;
