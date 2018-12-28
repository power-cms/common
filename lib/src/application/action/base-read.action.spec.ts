import { ISingleQuery } from '../query/single.query';
import { BaseReadAction } from './base-read.action';
import { Id } from '../../domain/id/id';
import { IActionData } from './action-handler';

const id = 'testId';

const QueryMock = jest.fn<ISingleQuery<any>>(() => ({
  get: jest.fn(),
}));

class MockReadAciton extends BaseReadAction<any> {
  public async authorize(action: IActionData): Promise<boolean> {
    return true;
  }
}

describe('Base read action', () => {
  it('Fetches resource', async () => {
    const query = new QueryMock();
    const action = new MockReadAciton(query);

    await action.handle({ params: { id } });

    expect(query.get).toBeCalledWith(Id.fromString(id));
  });
});
