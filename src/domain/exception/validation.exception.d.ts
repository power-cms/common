import { ValidationError } from 'joi';
import { InvalidArgumentException } from './invalid-argument.exception';
interface IDetail {
    path: string;
    message: string;
}
export declare class ValidationException extends InvalidArgumentException {
    details: IDetail[];
    static fromJoiError(error: ValidationError): ValidationException;
    constructor(message: string, details: IDetail[]);
}
export {};
