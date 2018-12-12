"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagination {
    constructor(page, limit) {
        this.page = page;
        this.limit = limit;
    }
    static fromRequest(request) {
        const query = request.query || {};
        return new Pagination(Number(query.page || 1), Number(query.limit || 10));
    }
    getPage() {
        return this.page;
    }
    getLimit() {
        return this.limit;
    }
}
exports.Pagination = Pagination;
