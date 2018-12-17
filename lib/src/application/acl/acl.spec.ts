import { IRemoteProcedure } from '../remote-procedure/remote-procedure';
import { Acl } from './acl';

const RemoteProcedureMock = jest.fn<IRemoteProcedure>(() => ({
  call: jest.fn()
}));

describe('Acl', () => {
  it('Builds acl call with full options', async () => {
    const remoteProcedure = new RemoteProcedureMock();

    const aclFactory = new Acl(remoteProcedure);
    const resource = {foo: 'bar'};

    await aclFactory
      .createBuilder(resource)
      .isAdmin()
      .isAuthenticated()
      .isOwner()
      .check();

    expect(remoteProcedure.call).toBeCalledWith(
      'auth',
      'authorize',
      {
        data: {
          resource,
          rules: {
            roles: ['Admin'],
            isAuthenticated: true,
            isOwner: true
          }
        }
      }
    );
  });

  it('Builds acl call with some options', async () => {
    const remoteProcedure = new RemoteProcedureMock();

    const aclFactory = new Acl(remoteProcedure);
    const resource = {foo: 'bar'};

    await aclFactory
      .createBuilder(resource)
      .isAdmin()
      .isOwner()
      .check();

    expect(remoteProcedure.call).toBeCalledWith(
      'auth',
      'authorize',
      {
        data: {
          resource,
          rules: {
            roles: ['Admin'],
            isOwner: true
          }
        }
      }
    );
  });
});
