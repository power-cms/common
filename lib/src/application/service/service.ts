import { IActionHandler } from '../action/action-handler';

export interface IErrorResponse {
  message: string;
  classes: string[];
  details?: any;
}

export interface IService {
  name: string;
  actions: IActionHandler[];
}
