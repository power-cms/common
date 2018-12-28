import { Id } from '../../domain/id/id';
import { ISingleQuery } from '../query/single.query';
import { ActionType, IActionData, IActionHandler } from './action-handler';

export abstract class BaseReadAction<T> implements IActionHandler {
  public name: string = 'read';
  public type: ActionType = ActionType.READ;
  public validator?: any;

  constructor(private query: ISingleQuery<T>) {}

  public handle(action: IActionData): Promise<T> {
    return this.query.get(Id.fromString(action.params.id));
  }

  public abstract authorize(action: IActionData): Promise<boolean>;
}
