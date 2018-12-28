import * as Joi from 'joi';
import { validate } from './joi.validator';
import { ValidationException } from '../../domain';

describe('Joi validator', () => {
  it('Validates the proper schema', () => {
    expect(() => {
      validate(
        { foo: 'bar' },
        Joi.object().keys({
          foo: Joi.string().required(),
        })
      );
    }).not.toThrow();
  });

  it('Accepts extra fields', () => {
    expect(() => {
      validate(
        { foo: 'bar', unexpected: 'data' },
        Joi.object().keys({
          foo: Joi.string().required(),
        })
      );
    }).not.toThrow();
  });

  it('Validates improper data', () => {
    expect(() => {
      validate(
        {},
        Joi.object().keys({
          foo: Joi.string().required(),
        })
      );
    }).toThrowError(ValidationException);
  });
});
