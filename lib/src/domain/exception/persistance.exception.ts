import { DomainException } from './domain.exception';

export class PersistanceException extends DomainException {
  public static fromError(error: Error): PersistanceException {
    return new PersistanceException(`Persistance exception: ${error.message}`);
  }
}
