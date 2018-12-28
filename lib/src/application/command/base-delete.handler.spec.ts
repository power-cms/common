import { BaseDeleteCommandHandler } from './base-delete.handler';
import { IDeleteRepository } from '../../domain/repository/delete.repository';

const id = 'testId';

const RepositoryMock = jest.fn<IDeleteRepository>(() => ({
  delete: jest.fn(),
}));

type Transformer = (command: any) => any;

class MockDeleteAciton extends BaseDeleteCommandHandler<any> {
  protected getId = jest.fn<Transformer>(data => data.id);
}

describe('Base delete handler', () => {
  it('Handles delete command', async () => {
    const repository = new RepositoryMock();
    const action = new MockDeleteAciton(repository);

    await action.handle({ id });

    expect(repository.delete).toBeCalledWith(id);
  });
});
