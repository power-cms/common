import { BaseCreateAction } from './base-create.action';
import { ICommandHandler } from '../command/command-handler';
import { ISingleQuery } from '../query/single.query';
import { Id } from '../../domain/id/id';
import { IActionData } from './action-handler';

const id = 'testId';

const CommandHandlerMock = jest.fn<ICommandHandler>(() => ({
  handle: jest.fn(),
}));

const SingleQueryMock = jest.fn<ISingleQuery<any>>(() => ({
  get: jest.fn(),
}));

jest.mock('../../domain/id/id.generator', () => {
  return {
    generate: () => id,
  };
});

class MockCreateAciton extends BaseCreateAction<any> {
  public async authorize(action: IActionData): Promise<boolean> {
    return true;
  }
}

describe('Base create action', () => {
  it('Creates new resource', async () => {
    const handler = new CommandHandlerMock();
    const query = new SingleQueryMock();
    const action = new MockCreateAciton(handler, query);
    const data = { foo: 'bar' };

    await action.handle({ data });

    expect(handler.handle).toBeCalledWith({ ...data, id });
    expect(query.get).toBeCalledWith(Id.fromString(id));
  });
});
