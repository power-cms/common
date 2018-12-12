import { IActionData } from "../action/action-handler";

export interface IRemoteProcedure {
  call: <T>(serviceName: string, action: IActionData) => T;
}
