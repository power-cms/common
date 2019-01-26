import { ICommandHandler } from '../command/command-handler';
import { ActionType, IActionData } from './action-handler';
import { BaseAction } from './base.action';

export abstract class BaseDeleteAction extends BaseAction {
  public name: string = 'delete';
  public type: ActionType = ActionType.DELETE;

  constructor(private handler: ICommandHandler) {
    super();
  }

  public abstract authorize(action: IActionData): Promise<boolean>;

  protected async perform(action: IActionData): Promise<void> {
    await this.handler.handle({ id: action.params.id });
  }
}
