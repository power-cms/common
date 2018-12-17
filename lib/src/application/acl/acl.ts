import { IActionData } from '../../application/action/action-handler';
import { IRemoteProcedure } from '../../application/remote-procedure/remote-procedure';

export class Acl {
  constructor(private remoteProcedure: IRemoteProcedure, private readonly resource = {}, private rules: any = {}) {
  }

  public createBuilder(resource: any): Acl {
    return new Acl(this.remoteProcedure, resource);
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
    const {rules, resource} = this;

    const action: IActionData = {
      data: {rules, resource}
    };

    return !!this.remoteProcedure.call('auth', 'authorize', action);
  }
}
