import { IActionData } from '../../application/action/action-handler';
import { IRemoteProcedure } from '../../application/remote-procedure/remote-procedure';

export class Acl {
  constructor(private remoteProcedure: IRemoteProcedure, private readonly action: IActionData = {}, private rules: any = {}) {
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

  public async check(): Promise<boolean> {
    const {rules, action} = this;

    const authorizeAction: IActionData = {
      ...action,
      data: {rules, resource: action.data},
    };

    return !! await this.remoteProcedure.call('auth', 'authorize', authorizeAction);
  }
}
