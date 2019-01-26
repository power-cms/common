import { Pagination } from '../pagination/pagination';
import { IPaginationView } from '../pagination/pagination.view';
import { ICollectionQuery } from '../query/collection.query';
import { ActionType, IActionData } from './action-handler';
import { BaseAction } from './base.action';

export abstract class BaseCollectionAction<T> extends BaseAction {
  public name: string = 'collection';
  public type: ActionType = ActionType.COLLECTION;

  constructor(private query: ICollectionQuery<T>) {
    super();
  }

  public abstract authorize(action: IActionData): Promise<boolean>;

  protected perform(action: IActionData): Promise<IPaginationView<T>> {
    return this.query.getAll(Pagination.fromRequest(action));
  }
}
