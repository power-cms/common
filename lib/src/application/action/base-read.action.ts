import { Id } from '../../domain/id/id';
import { ISingleQuery } from '../query/single.query';
import { ActionType, IActionData } from './action-handler';
import { BaseAction } from './base.action';

export abstract class BaseReadAction<T> extends BaseAction {
  public name: string = 'read';
  public type: ActionType = ActionType.READ;

  constructor(private query: ISingleQuery<T>) {
    super();
  }

  public abstract authorize(action: IActionData): Promise<boolean>;

  protected perform(action: IActionData): Promise<T> {
    return this.query.get(Id.fromString(action.params.id));
  }
}
