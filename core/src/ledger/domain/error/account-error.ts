import { DomainError } from "../../../shared/error";
import { ErrorData, ErrorCode } from "../../../shared/value";

/**
 * Represents errors related to Account entities in the ledger domain. 
 * It extends the base DomainError class and provides specific error types for account-related issues.
 */
export class AccountError extends DomainError
{
    private static readonly ENTITY_NAME = "Account";
    
    public static InvalidAccountId(code: ErrorCode, message: string): AccountError
    {
        let _err = new ErrorData(code, message, this.ENTITY_NAME, "id");
        return new AccountError(_err);
    }

    public static InvalidAccountName(code: ErrorCode, message: string): AccountError
    {
        let _err = new ErrorData(code, message, this.ENTITY_NAME, "name");
        return new AccountError(_err);
    }

    public static InvalidAccountDescription(code: ErrorCode, message: string): AccountError
    {
        let _err = new ErrorData(code, message, this.ENTITY_NAME, "description");
        return new AccountError(_err);  
    }
}