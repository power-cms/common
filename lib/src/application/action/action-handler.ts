export enum ActionType {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  COLLECTION = 'collection',
}

export interface IActionData {
  data?: any;
  params?: any;
  query?: any;
  auth?: any;
}

export interface IActionHandler {
  name: string;
  type: ActionType;
  private?: boolean;
  execute: (action: IActionData) => Promise<any>;
  authorize?: (action: IActionData) => Promise<boolean>;
}
