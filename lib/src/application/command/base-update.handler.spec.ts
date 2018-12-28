import { BaseUpdateCommandHandler } from './base-update.handler';
import { IUpdateRepository } from '../../domain/repository/update.repository';

const RepositoryMock = jest.fn<IUpdateRepository<any>>(() => ({
  update: jest.fn(),
}));

type Transformer = (command: any) => any;

class MockUpdateAciton extends BaseUpdateCommandHandler<any, any> {
  protected transform = jest.fn<Transformer>(data => data);
}

describe('Base update handler', () => {
  it('Handles update command', async () => {
    const repository = new RepositoryMock();
    const action = new MockUpdateAciton(repository);
    const data = { foo: 'bar' };

    await action.handle(data);

    expect(repository.update).toBeCalledWith(data);
  });
});
