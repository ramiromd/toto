import { validate as UuidValidate, v4 as Uuid } from 'uuid';
import { ErrorCode } from './error-code';

export abstract class UuidIdentifier {
  
    protected readonly value: string;

    protected constructor(value?: string | null) 
    {
        let _value = value ?? Uuid().toString();
        this.checkString(_value);
        this.value = _value;
    }

    protected checkString(value: string): void 
    {
        if (!UuidValidate(value)) {
            this.throwValidationError(ErrorCode.INVALID_VALUE, `Invalid UUID value: ${value}`);
        }
    }

    protected abstract throwValidationError(code: ErrorCode, message: string): void;
}