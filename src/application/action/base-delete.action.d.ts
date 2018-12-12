import { ICommandHandler } from "../command/command-handler";
import { ActionType, IActionData, IActionHandler } from "./action-handler";
export declare class BaseDeleteAction implements IActionHandler {
    private handler;
    name: string;
    type: ActionType;
    validator?: any;
    authorize?: (action: IActionData) => Promise<boolean>;
    constructor(handler: ICommandHandler);
    handle(action: IActionData): Promise<void>;
}
