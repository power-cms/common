"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandHandlerLogger {
    constructor(logger, inner) {
        this.logger = logger;
        this.inner = inner;
    }
    handle(data) {
        const handlerName = this.inner.constructor.name;
        const dataString = JSON.stringify(this.prepareData(data));
        try {
            const result = this.inner.handle(data);
            this.logger.info(`${handlerName} successfully handled command ${dataString}`);
            return result;
        }
        catch (e) {
            this.logger.error(`${handlerName} couldn't handle command ${dataString} with reason: ${e.message}`);
            return Promise.reject(e);
        }
    }
    prepareData(command) {
        const log = {};
        for (const prop in command) {
            if (CommandHandlerLogger.sensitiveKeys.indexOf(prop) !== -1) {
                log[prop] = '****';
            }
            else if (typeof command[prop] === 'object') {
                log[prop] = this.prepareData(command[prop]);
            }
            else {
                log[prop] = command[prop];
            }
        }
        return log;
    }
}
CommandHandlerLogger.sensitiveKeys = ['buffer', 'password'];
exports.CommandHandlerLogger = CommandHandlerLogger;
