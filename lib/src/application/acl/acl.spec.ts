import { IRemoteProcedure } from '../remote-procedure/remote-procedure';
import { Acl } from './acl';
import { IActionData } from '../action/action-handler';

const RemoteProcedureMock = jest.fn<IRemoteProcedure>(() => ({
  call: jest.fn()
}));

describe('Acl', () => {
  it('Builds acl call with full options', async () => {
    const remoteProcedure = new RemoteProcedureMock();

    const aclFactory = new Acl(remoteProcedure);
    const action: IActionData = {data: {foo: 'bar'}, auth: {id: 'user-id'}};

    await aclFactory
      .createBuilder(action)
      .isAdmin()
      .isAuthenticated()
      .isOwner()
      .check();

    expect(remoteProcedure.call).toBeCalledWith(
      'auth',
      'authorize',
      {
        data: {
          resource: {foo: 'bar'},
          rules: {
            roles: ['Admin'],
            isAuthenticated: true,
            isOwner: true
          }
        },
        auth: {
          id: 'user-id'
        }
      }
    );
  });

  it('Builds acl call with some options', async () => {
    const remoteProcedure = new RemoteProcedureMock();

    const aclFactory = new Acl(remoteProcedure);
    const action: IActionData = {data: {foo: 'bar'}};

    await aclFactory
      .createBuilder(action)
      .isAdmin()
      .isOwner()
      .check();

    expect(remoteProcedure.call).toBeCalledWith(
      'auth',
      'authorize',
      {
        data: {
          resource: {foo: 'bar'},
          rules: {
            roles: ['Admin'],
            isOwner: true
          }
        }
      }
    );
  });
});
