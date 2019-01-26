import { Id } from '../../domain/id/id';
import { ICommandHandler } from '../command/command-handler';
import { ISingleQuery } from '../query/single.query';
import { ActionType, IActionData } from './action-handler';
import { BaseAction } from './base.action';

export abstract class BaseCreateAction<T> extends BaseAction {
  public name: string = 'create';
  public type: ActionType = ActionType.CREATE;

  constructor(private handler: ICommandHandler, private query: ISingleQuery<T>) {
    super();
  }

  public abstract authorize(action: IActionData): Promise<boolean>;

  protected async perform(action: IActionData): Promise<T> {
    const id = Id.generate();
    await this.handler.handle({ ...action.data, id: id.toString() });

    return this.query.get(id);
  }
}
