import { ICommandHandler } from "../command/command-handler";
import { ISingleQuery } from "../query/single.query";
import { ActionType, IActionData, IActionHandler } from "./action-handler";
export declare class BaseUpdateAction<T> implements IActionHandler {
    private handler;
    private query;
    name: string;
    type: ActionType;
    validator?: any;
    authorize?: (action: IActionData) => Promise<boolean>;
    constructor(handler: ICommandHandler, query: ISingleQuery<T>);
    handle(action: IActionData): Promise<T>;
}
