import { IUpdateRepository } from "../../domain/repository/update.repository";
import { ICommandHandler } from "./command-handler";
export declare abstract class BaseUpdateCommandHandler<T, C> implements ICommandHandler {
    private repository;
    constructor(repository: IUpdateRepository<T>);
    handle(command: C): Promise<void>;
    protected abstract transform(command: C): T;
}
