import { BaseUpdateAction } from './base-update.action';
import { ISingleQuery } from '../query/single.query';
import { Id } from '../../domain/id/id';
import { ICommandHandler } from '../command/command-handler';
import { IActionData } from './action-handler';

const id = 'testId';

const CommandHandlerMock = jest.fn<ICommandHandler>(() => ({
  handle: jest.fn(),
}));

const SingleQueryMock = jest.fn<ISingleQuery<any>>(() => ({
  get: jest.fn(),
}));

class MockUpdateAciton extends BaseUpdateAction<any> {
  public async authorize(action: IActionData): Promise<boolean> {
    return true;
  }
}

describe('Base update action', () => {
  it('Updates resource', async () => {
    const handler = new CommandHandlerMock();
    const query = new SingleQueryMock();
    const action = new MockUpdateAciton(handler, query);
    const data = { foo: 'bar' };

    await action.execute({ data, params: { id } });

    expect(handler.handle).toBeCalledWith({ ...data, id });
    expect(query.get).toBeCalledWith(Id.fromString(id));
  });
});
