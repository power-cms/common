import { BaseDeleteAction } from './base-delete.action';
import { ICommandHandler } from '../command/command-handler';
import { IActionData } from './action-handler';

const CommandHandlerMock = jest.fn<ICommandHandler>(() => ({
  handle: jest.fn(),
}));

class MockDeleteAciton extends BaseDeleteAction {
  public async authorize(action: IActionData): Promise<boolean> {
    return true;
  }
}

describe('Base delete action', () => {
  it('Deletes resource', async () => {
    const id = 'testId';
    const handler = new CommandHandlerMock();
    const action = new MockDeleteAciton(handler);

    await action.execute({ params: { id } });

    expect(handler.handle).toBeCalledWith({ id });
  });
});
