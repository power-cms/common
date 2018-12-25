import { Pagination } from "../pagination/pagination";
import { IPaginationView } from "../pagination/pagination.view";
import { ICollectionQuery } from "../query/collection.query";
import { ActionType, IActionData, IActionHandler } from "./action-handler";

export abstract class BaseCollectionAction<T> implements IActionHandler {
  public name: string = 'collection';
  public type: ActionType = ActionType.COLLECTION;
  public validator?: any;

  constructor(private query: ICollectionQuery<T>) {
  }

  public handle(action: IActionData): Promise<IPaginationView<T>> {
    return this.query.getAll(Pagination.fromRequest(action));
  }

  public abstract authorize(action: IActionData): Promise<boolean>;
}
