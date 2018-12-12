import { Pagination } from "../pagination/pagination";
import { IPaginationView } from "../pagination/pagination.view";
import { ICollectionQuery } from "../query/collection.query";
import { ActionType, IActionData, IActionHandler } from "./action-handler";

export class BaseCollectionAction<T> implements IActionHandler {
  public name: string = 'collection';
  public type: ActionType = ActionType.COLLECTION;
  public validator?: any;
  public authorize?: (action: IActionData) => Promise<boolean>;

  constructor(private query: ICollectionQuery<T>) {
  }

  public handle(action: IActionData): Promise<IPaginationView<T>> {
    return this.query.getAll(Pagination.fromRequest(action));
  }
}
