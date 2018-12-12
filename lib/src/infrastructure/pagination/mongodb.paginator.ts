import { Collection } from 'mongodb';
import { Pagination } from '../../application/pagination/pagination';
import { IPaginationView } from '../../application/pagination/pagination.view';


export class MongodbPaginator {
  public async paginate<T>(
    collection: Collection,
    pagination: Pagination,
    callback: (data: any) => T
  ): Promise<IPaginationView<T>> {
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
