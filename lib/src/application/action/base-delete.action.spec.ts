import { BaseDeleteAction,  } from './base-delete.action';
import { ICommandHandler } from '../command/command-handler';

const CommandHandlerMock = jest.fn<ICommandHandler>(() => ({
  handle: jest.fn(),
}));

class MockDeleteAciton extends BaseDeleteAction {
}

describe('Base delete action', () => {
  it('Deletes resource', async () => {
    const id = 'testId';
    const handler = new CommandHandlerMock();
    const action = new MockDeleteAciton(handler);

    await action.handle({params: {id}});

    expect(handler.handle).toBeCalledWith({id});
  });
});
