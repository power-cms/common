import { IActionData } from '../action/action-handler';
import { Pagination } from './pagination';

describe('Pagination', () => {
  it('Paginates data with default params', () => {
    const actionData: IActionData = {};

    const pagination = Pagination.fromRequest(actionData);

    expect(pagination.getPage()).toBe(1);
    expect(pagination.getLimit()).toBe(10);
  });

  it('Paginates data with given params', () => {
    const actionData: IActionData = {
      query: { page: 3, limit: 25 },
    };

    const pagination = Pagination.fromRequest(actionData);

    expect(pagination.getPage()).toBe(3);
    expect(pagination.getLimit()).toBe(25);
  });
});
