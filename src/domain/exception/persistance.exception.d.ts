import { DomainException } from './domain.exception';
export declare class PersistanceException extends DomainException {
    static fromError(error: Error): PersistanceException;
}
