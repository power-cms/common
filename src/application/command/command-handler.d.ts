export interface ICommandHandler {
    handle(data: any): Promise<void>;
}
