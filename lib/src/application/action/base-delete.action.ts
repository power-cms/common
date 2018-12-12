import { ICommandHandler } from "../command/command-handler";
import { ActionType, IActionData, IActionHandler } from "./action-handler";

export class BaseDeleteAction implements IActionHandler {
  public name: string = 'delete';
  public type: ActionType = ActionType.DELETE;
  public validator?: any;
  public authorize?: (action: IActionData) => Promise<boolean>;

  constructor(private handler: ICommandHandler) {
  }

  public async handle(action: IActionData): Promise<void> {
    await this.handler.handle({id: action.params.id});
  }
}
