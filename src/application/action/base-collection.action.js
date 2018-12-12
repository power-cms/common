"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("../pagination/pagination");
const action_handler_1 = require("./action-handler");
class BaseCollectionAction {
    constructor(query) {
        this.query = query;
        this.name = 'collection';
        this.type = action_handler_1.ActionType.COLLECTION;
    }
    handle(action) {
        return this.query.getAll(pagination_1.Pagination.fromRequest(action));
    }
}
exports.BaseCollectionAction = BaseCollectionAction;
