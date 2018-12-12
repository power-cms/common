import { DomainException } from './domain.exception';
export declare class ForbiddenException extends DomainException {
    static create(): ForbiddenException;
    private constructor();
}
