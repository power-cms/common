import { ICommandHandler } from '../command/command-handler';
import { ILogger } from './logger';

interface ICommand {[prop: string]: any}

export class CommandHandlerLogger implements ICommandHandler {
  private static sensitiveKeys = ['buffer', 'password'];

  constructor(private logger: ILogger, private inner: ICommandHandler) {}

  public handle(data: any): Promise<any> {
    const handlerName: string = this.inner.constructor.name;

    const dataString: string = JSON.stringify(this.prepareData(data));

    try {
      const result = this.inner.handle(data);
      this.logger.info(`${handlerName} successfully handled command ${dataString}`);
      return result;
    } catch (e) {
      this.logger.error(`${handlerName} couldn't handle command ${dataString} with reason: ${e.message}`);
      return Promise.reject(e);
    }
  }

  private prepareData(command: ICommand): ICommand {
    const log: ICommand = {};

    for(const prop in command) {
      if(CommandHandlerLogger.sensitiveKeys.indexOf(prop) !== -1) {
        log[prop] = '****';
      } else if (typeof command[prop] === 'object') {
        log[prop] = this.prepareData(command[prop]);
      } else {
        log[prop] = command[prop];
      }
    }

    return log;
  }
}
