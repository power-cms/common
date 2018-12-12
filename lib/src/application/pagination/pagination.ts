import { IActionData } from '../action/action-handler';

export class Pagination {
  public static fromRequest(request: IActionData): Pagination {
    const query = request.query || {};

    return new Pagination(Number(query.page || 1), Number(query.limit || 10));
  }

  private constructor(private page: number, private limit: number) {}

  public getPage(): number {
    return this.page;
  }

  public getLimit(): number {
    return this.limit;
  }
}
