import { BaseCollectionAction } from './base-collection.action';
import { ICollectionQuery } from './../query/collection.query';

const QueryMock = jest.fn<ICollectionQuery<any>>(() => ({
  getAll: jest.fn(),
}));

class MockCollectionAciton extends BaseCollectionAction<any> {
}

describe('Base collection action', () => {
  it('Fetches collection', async () => {
    const query = new QueryMock();
    const action = new MockCollectionAciton(query);

    await action.handle({});

    expect(query.getAll).toBeCalled();
  });
});
