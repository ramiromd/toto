import { UuidIdentifier, ErrorCode } from "../../../shared/value";
import { AccountError } from "../error";

export class AccountId extends UuidIdentifier
{

    static create(): AccountId 
    {
        return new AccountId();
    }

    static restore(value: string): AccountId 
    {
        return new AccountId(value);
    }

    protected throwValidationError(code: ErrorCode, message: string): void {
        throw AccountError.InvalidAccountId(code, message);
    }
}