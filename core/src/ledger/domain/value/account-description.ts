import { ErrorCode } from "@shared/domain/value";
import { AccountError } from "@ledger/domain/error";

export class AccountDescription 
{
    private value: string;

    private constructor(value: string)
    {
        this.checkMinLength(value);
        this.checkMaxLength(value);
        this.value = value;
    }

    static create(value: string): AccountDescription
    {
        return new AccountDescription(value);
    }

    public getValue(): string
    {
        return this.value;
    }

    private checkMinLength(value: string)
    {
        let min = 3
        let msg = `Account description must be at least ${min} characters long.`;
        if (value == null || value.length < min) {
            throw AccountError.InvalidAccountDescription(ErrorCode.TOO_SHORT, msg); 
        }
    }

    private checkMaxLength(value: string)
    {
        let max = 100;
        let msg = `Account description must be less than ${max} characters long.`;
        if (value == null || value.length > max) {
            throw AccountError.InvalidAccountDescription(ErrorCode.TOO_LONG, msg);
        }
    }
}