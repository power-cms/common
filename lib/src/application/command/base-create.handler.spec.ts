import { BaseCreateCommandHandler } from './base-create.handler';
import { ICreateRepository } from '../../domain/repository/create.repository';

const RepositoryMock = jest.fn<ICreateRepository<any>>(() => ({
  create: jest.fn(),
}));

type Transformer = (command: any) => any;

class MockCreateAciton extends BaseCreateCommandHandler<any, any> {
  protected transform = jest.fn<Transformer>(data => data);
}

describe('Base create handler', () => {
  it('Handles create command', async () => {
    const repository = new RepositoryMock();
    const action = new MockCreateAciton(repository);
    const data = { foo: 'bar' };

    await action.handle(data);

    expect(repository.create).toBeCalledWith(data);
  });
});
