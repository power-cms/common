import { IActionData } from '../../application/action/action-handler';
import { IRemoteProcedure } from '../../application/remote-procedure/remote-procedure';

export type ICustomRule = (actionData: any) => boolean;

export class Acl {
  private rules: any = {};
  private customRule?: ICustomRule;

  constructor(
    private remoteProcedure: IRemoteProcedure,
    private readonly action: IActionData = {},
  ) {
  }

  public createBuilder(action: IActionData): Acl {
    return new Acl(this.remoteProcedure, action);
  }

  public isAdmin(): Acl {
    this.rules.roles = ['Admin'];

    return this;
  }

  public isAuthenticated(): Acl {
    this.rules.isAuthenticated = true;

    return this;
  }

  public isOwner(): Acl {
    this.rules.isOwner = true;

    return this;
  }

  public custom(customRule: ICustomRule): Acl {
    this.customRule = customRule;

    return this;
  }

  public async check(): Promise<boolean> {
    const {rules, action} = this;

    if (this.customRule && this.customRule(action.data)) {
      return true;
    }

    const authorizeAction: IActionData = {
      ...action,
      data: {rules, resource: action.data},
    };

    return !! await this.remoteProcedure.call('auth', 'authorize', authorizeAction);
  }
}
