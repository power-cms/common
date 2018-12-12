import { IActionData } from '../action/action-handler';
export declare class Pagination {
    private page;
    private limit;
    static fromRequest(request: IActionData): Pagination;
    private constructor();
    getPage(): number;
    getLimit(): number;
}
