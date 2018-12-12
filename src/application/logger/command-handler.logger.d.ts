import { ICommandHandler } from '../command/command-handler';
import { ILogger } from './logger';
export declare class CommandHandlerLogger implements ICommandHandler {
    private logger;
    private inner;
    private static sensitiveKeys;
    constructor(logger: ILogger, inner: ICommandHandler);
    handle(data: any): Promise<any>;
    private prepareData;
}
