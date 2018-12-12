import { IUpdateRepository } from "../../domain/repository/update.repository";
import { ICommandHandler } from "./command-handler";

export abstract class BaseUpdateCommandHandler<T, C> implements ICommandHandler {
  constructor(private repository: IUpdateRepository<T>) {}

  public async handle(command: C): Promise<void> {
    const dto = this.transform(command);

    await this.repository.update(dto);
  }

  protected abstract transform(command: C): T;
}
