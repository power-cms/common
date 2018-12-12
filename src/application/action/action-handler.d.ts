import { JoiObject } from 'joi';
export declare enum ActionType {
    CREATE = "create",
    READ = "read",
    UPDATE = "update",
    DELETE = "delete",
    COLLECTION = "collection"
}
export interface IActionData {
    data?: any;
    params?: any;
    query?: any;
    auth?: any;
}
export interface IActionHandler {
    name: string;
    type: ActionType;
    private?: boolean;
    handle: (action: IActionData) => Promise<any>;
    validator?: JoiObject;
    authorize?: (action: IActionData) => Promise<boolean>;
}
