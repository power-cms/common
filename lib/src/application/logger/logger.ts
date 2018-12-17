export type ILogMethod = (level: string, msg: string) => any;

export type ILeveledLogMethod = (msg: string) => any;

export interface ILogger {
  log: ILogMethod;
  error: ILeveledLogMethod;
  warn: ILeveledLogMethod;
  info: ILeveledLogMethod;
  verbose: ILeveledLogMethod;
  debug: ILeveledLogMethod;
}
