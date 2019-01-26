import { BaseCollectionAction } from './base-collection.action';
import { ICollectionQuery } from './../query/collection.query';
import { IActionData } from './action-handler';

const QueryMock = jest.fn<ICollectionQuery<any>>(() => ({
  getAll: jest.fn(),
}));

class MockCollectionAciton extends BaseCollectionAction<any> {
  public async authorize(action: IActionData): Promise<boolean> {
    return true;
  }
}

describe('Base collection action', () => {
  it('Fetches collection', async () => {
    const query = new QueryMock();
    const action = new MockCollectionAciton(query);

    await action.execute({});

    expect(query.getAll).toBeCalled();
  });
});
