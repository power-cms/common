import { Id } from '../../domain/id/id';
import { ICommandHandler } from '../command/command-handler';
import { ISingleQuery } from '../query/single.query';
import { ActionType, IActionData, IActionHandler } from './action-handler';

export abstract class BaseCreateAction<T> implements IActionHandler {
  public name: string = 'create';
  public type: ActionType = ActionType.CREATE;
  public validator?: any;

  constructor(private handler: ICommandHandler, private query: ISingleQuery<T>) {}

  public async handle(action: IActionData): Promise<T> {
    const id = Id.generate();
    await this.handler.handle({ ...action.data, id: id.toString() });

    return this.query.get(id);
  }

  public abstract authorize(action: IActionData): Promise<boolean>;
}
