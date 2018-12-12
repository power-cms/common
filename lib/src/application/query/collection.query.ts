import { Pagination } from "../pagination/pagination";
import { IPaginationView } from "../pagination/pagination.view";

export interface ICollectionQuery<T> {
  getAll(pagination: Pagination): Promise<IPaginationView<T>>
}
