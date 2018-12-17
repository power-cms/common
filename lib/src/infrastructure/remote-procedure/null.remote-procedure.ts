import { IActionData } from '../../application/action/action-handler';
import { IRemoteProcedure } from '../../application/remote-procedure/remote-procedure';

export class NullRemoteProcedure implements IRemoteProcedure {
  public call<T>(serviceName: string, actionName: string, action: IActionData): Promise<T> {
    return Promise.reject(new Error('Could not call remote procedure with NullRemoteProcedure class.'));
  }
}
