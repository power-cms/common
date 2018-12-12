import { ISingleQuery } from "../query/single.query";
import { ActionType, IActionData, IActionHandler } from "./action-handler";
export declare class BaseReadAction<T> implements IActionHandler {
    private query;
    name: string;
    type: ActionType;
    validator?: any;
    authorize?: (action: IActionData) => Promise<boolean>;
    constructor(query: ISingleQuery<T>);
    handle(action: IActionData): Promise<T>;
}
