import { ICreateRepository } from '../../domain/repository/create.repository';
import { ICommandHandler } from './command-handler';

export abstract class BaseCreateCommandHandler<T, C> implements ICommandHandler {
  constructor(private repository: ICreateRepository<T>) {}

  public async handle(command: C): Promise<void> {
    const dto = this.transform(command);

    await this.repository.create(dto);
  }

  protected abstract transform(command: C): T;
}
