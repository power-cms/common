import * as Joi from 'joi';
import { ValidationException } from '../../domain';
import { ActionType, IActionData, IActionHandler } from './action-handler';

export abstract class BaseAction implements IActionHandler {
  public abstract name: string;
  public abstract type: ActionType;
  protected validator?: any;

  public async execute(action: IActionData): Promise<any> {
    if (this.validator) {
      const violations = Joi.validate(action.data, this.validator, { abortEarly: false, allowUnknown: true });

      if (violations.error) {
        throw ValidationException.fromJoiError(violations.error);
      }
    }

    return this.perform(action);
  }

  protected abstract perform(action: IActionData): Promise<any>;
}
