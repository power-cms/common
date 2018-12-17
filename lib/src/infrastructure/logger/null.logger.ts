import { ILogger } from '../../application/logger/logger';

/* tslint:disable no-empty */

/*
* This is NullLogger - it does nothing, can be used in tests
* or be replaced by other project-based logger
*/
export class NullLogger implements ILogger {

  public log(level: string, msg: string) {
  }

  public error(msg: string) {
  }

  public warn(msg: string) {
  }

  public info(msg: string) {
  }

  public verbose(msg: string) {
  }
  public debug(msg: string) {
  }
}
