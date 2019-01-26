import { DomainException } from './domain.exception';

export class ForbiddenException extends DomainException {
  public static create(): ForbiddenException {
    return new ForbiddenException('You are not authorized to perform this action.');
  }

  protected constructor(message: string) {
    super(message);
  }
}
