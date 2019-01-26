import { Id } from '../../domain/id/id';
import { ICommandHandler } from '../command/command-handler';
import { ISingleQuery } from '../query/single.query';
import { ActionType, IActionData } from './action-handler';
import { BaseAction } from './base.action';

export abstract class BaseUpdateAction<T> extends BaseAction {
  public name: string = 'update';
  public type: ActionType = ActionType.UPDATE;
  public validator?: any;

  constructor(private handler: ICommandHandler, private query: ISingleQuery<T>) {
    super();
  }

  public abstract authorize(action: IActionData): Promise<boolean>;

  protected async perform(action: IActionData): Promise<T> {
    const id: string = action.params.id;
    await this.handler.handle({ id, ...action.data });

    return this.query.get(Id.fromString(id));
  }
}
