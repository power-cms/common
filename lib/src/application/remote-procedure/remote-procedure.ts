import { IActionData } from '../action/action-handler';

export interface IRemoteProcedure {
  call: <T>(serviceName: string, actionName: string, action: IActionData) => Promise<T>;
}
