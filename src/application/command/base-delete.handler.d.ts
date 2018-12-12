import { IDeleteRepository } from '../../domain/repository/delete.repository';
import { ICommandHandler } from './command-handler';
export declare abstract class BaseDeleteCommandHandler<C> implements ICommandHandler {
    private repository;
    constructor(repository: IDeleteRepository);
    handle(command: C): Promise<void>;
    protected abstract getId(command: C): string;
}
