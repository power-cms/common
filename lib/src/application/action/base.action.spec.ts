import * as Joi from 'joi';
import { IActionData, ActionType } from './action-handler';
import { BaseAction } from './base.action';

class MockValidationAciton extends BaseAction {
  public name = 'test';
  public type = ActionType.CREATE;
  protected validator = Joi.object({ foo: Joi.string().required() });
  protected perform(action: IActionData) {
    return action.data;
  }
  public async authorize(action: IActionData): Promise<boolean> {
    return true;
  }
}

describe('Base action', () => {
  it('Throws validation error', async () => {
    const action = new MockValidationAciton();

    const handler = action.execute({ data: {}, params: {} });

    expect.assertions(1);

    await expect(handler).rejects.toThrowError();
  });

  it('Passes the validation', async () => {
    const action = new MockValidationAciton();

    const result = await action.execute({ data: { foo: 'bar' }, params: {} });

    expect(result).toEqual({ foo: 'bar' });
  });
});
