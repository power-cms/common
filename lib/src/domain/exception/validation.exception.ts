import { ValidationError } from 'joi';
import { InvalidArgumentException } from './invalid-argument.exception';

interface IDetail {
  path: string;
  message: string;
}

export class ValidationException extends InvalidArgumentException {
  public static fromJoiError(error: ValidationError): ValidationException {
    const details: IDetail[] = error.details.map(detail => ({
      path: detail.path.join('.'),
      message: detail.type,
    }));

    return new ValidationException('Validation error', details);
  }

  constructor(message: string, public details: IDetail[]) {
    super(message);
  }
}
