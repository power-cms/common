import * as Joi from 'joi';
import { JoiObject } from 'joi';
import { ValidationException } from '../../domain';

export const validate = (data: any, validator: JoiObject): void => {
  const result = Joi.validate(data, validator, { abortEarly: false, allowUnknown: true });

  if (result.error) {
    throw ValidationException.fromJoiError(result.error);
  }
};
