import { Collection } from 'mongodb';
import { Pagination } from '../../application/pagination/pagination';
import { IPaginationView } from '../../application/pagination/pagination.view';
export declare class MongodbPaginator {
    paginate<T>(collection: Collection, pagination: Pagination, callback: (data: any) => T): Promise<IPaginationView<T>>;
}
