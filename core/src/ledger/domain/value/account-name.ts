import { ErrorCode } from "../../../shared/domain/value";
import { AccountError } from "../error";

export class AccountName
{
    private value: string;

    private constructor(value: string)
    {
        this.checkMinLength(value);
        this.checkMaxLength(value);
        this.value = value;
    }

    static create(value: string): AccountName
    {
        return new AccountName(value);
    }

    public getValue(): string
    {
        return this.value;
    }

    private checkMinLength(value: string)
    {
        let min = 3
        let msg = `Account name must be at least ${min} characters long.`;  
        if (value == null || value.length < min) {
            throw AccountError.InvalidAccountName(ErrorCode.TOO_SHORT, msg);
        }
    }

    private checkMaxLength(value: string)
    {
        let max = 64;
        let msg = `Account name must be less than ${max} characters long.`;
        if (value == null || value.length > max) {
            throw AccountError.InvalidAccountName(ErrorCode.TOO_LONG, msg);
        }
    }
}