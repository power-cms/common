"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongodbPaginator {
    async paginate(collection, pagination, callback) {
        const page = pagination.getPage();
        const limit = pagination.getLimit();
        const data = await collection
            .find()
            .skip((page - 1) * limit)
            .limit(limit)
            .toArray();
        const total = await collection.estimatedDocumentCount();
        return {
            data: data.map(callback),
            page,
            totalPages: Math.ceil(total / limit)
        };
    }
}
exports.MongodbPaginator = MongodbPaginator;
