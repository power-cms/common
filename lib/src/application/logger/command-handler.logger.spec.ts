import { ICommandHandler } from '../command/command-handler';
import { CommandHandlerLogger } from './command-handler.logger';
import { ILogger } from './logger';

const LoggerMock = jest.fn<ILogger>(() => ({
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  verbose: jest.fn(),
  debug: jest.fn(),
}));

const logger = new LoggerMock();

describe('Command handler logger', () => {
  it('Logs success command', async () => {
    const data = { foo: 'bar' };

    const innerHandler: ICommandHandler = {
      handle: handlerData => {
        return Promise.resolve(handlerData);
      },
    };

    const handler = new CommandHandlerLogger(logger, innerHandler);

    const result = await handler.handle(data);
    expect(result).toEqual(data);
    expect(logger.info).toBeCalled();
  });

  it('Hides protected fields', async () => {
    const data = { password: 'super secret password' };

    const innerHandler: ICommandHandler = {
      handle: handlerData => {
        return Promise.resolve(handlerData);
      },
    };

    const handler = new CommandHandlerLogger(logger, innerHandler);

    await handler.handle(data);
    expect(logger.info).toBeCalledWith('Object successfully handled command {"password":"****"}');
  });

  it('Handles nested data', async () => {
    const data = { foo: { bar: { hello: 'world' } } };

    const innerHandler: ICommandHandler = {
      handle: handlerData => {
        return Promise.resolve(handlerData);
      },
    };

    const handler = new CommandHandlerLogger(logger, innerHandler);

    await handler.handle(data);
    expect(logger.info).toBeCalledWith('Object successfully handled command {"foo":{"bar":{"hello":"world"}}}');
  });

  it('Logs failure command', async () => {
    const innerHandler: ICommandHandler = {
      handle: () => {
        throw new Error('Some reason');
      },
    };

    const handler = new CommandHandlerLogger(logger, innerHandler);

    expect.assertions(2);

    try {
      await handler.handle({ foo: 'bar' });
    } catch (e) {
      expect(e).toBeDefined();
    }

    expect(logger.error).toBeCalled();
  });
});
