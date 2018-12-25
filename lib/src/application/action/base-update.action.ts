import { Id } from "../../domain/id/id";
import { ICommandHandler } from "../command/command-handler";
import { ISingleQuery } from "../query/single.query";
import { ActionType, IActionData, IActionHandler } from "./action-handler";

export abstract class BaseUpdateAction<T> implements IActionHandler {
  public name: string = 'update';
  public type: ActionType = ActionType.UPDATE;
  public validator?: any;

  constructor(private handler: ICommandHandler, private query: ISingleQuery<T>) {
  }

  public async handle(action: IActionData): Promise<T> {
    const id: string = action.params.id;
    await this.handler.handle({id, ...action.data});

    return this.query.get(Id.fromString(id));
  }

  public abstract authorize(action: IActionData): Promise<boolean>;
}
