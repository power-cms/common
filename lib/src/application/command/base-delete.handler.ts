import { IDeleteRepository } from '../../domain/repository/delete.repository';
import { ICommandHandler } from './command-handler';

export abstract class BaseDeleteCommandHandler<C> implements ICommandHandler {
  constructor(private repository: IDeleteRepository) {}

  public async handle(command: C): Promise<void> {
    const id = this.getId(command);

    this.repository.delete(id);
  }

  protected abstract getId(command: C): string;
}
