import { ICreateRepository } from "../../domain/repository/create.repository";
import { ICommandHandler } from "./command-handler";
export declare abstract class BaseCreateCommandHandler<T, C> implements ICommandHandler {
    private repository;
    constructor(repository: ICreateRepository<T>);
    handle(command: C): Promise<void>;
    protected abstract transform(command: C): T;
}
