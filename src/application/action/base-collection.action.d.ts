import { IPaginationView } from "../pagination/pagination.view";
import { ICollectionQuery } from "../query/collection.query";
import { ActionType, IActionData, IActionHandler } from "./action-handler";
export declare class BaseCollectionAction<T> implements IActionHandler {
    private query;
    name: string;
    type: ActionType;
    validator?: any;
    authorize?: (action: IActionData) => Promise<boolean>;
    constructor(query: ICollectionQuery<T>);
    handle(action: IActionData): Promise<IPaginationView<T>>;
}
