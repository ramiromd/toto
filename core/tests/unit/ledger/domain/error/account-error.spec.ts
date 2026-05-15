import { AccountError } from "@ledger/domain/error/account-error";
import { DomainError } from "@shared/domain/error";
import { ErrorCode } from "@shared/domain/value";

describe("AccountError", () => {

    describe("InvalidAccountId", () => {

        it("should build an AccountError exposing the Account entity, the 'id' field and the provided code and message when invoked with valid values", () => {
            // Given
            const code = ErrorCode.INVALID_VALUE;
            const message = "Invalid account id";

            // When
            const sut = AccountError.InvalidAccountId(code, message);

            expect(sut).toBeInstanceOf(AccountError);
            expect(sut).toBeInstanceOf(DomainError);
            expect(sut.getCode()).toBe(code);
            expect(sut.getEntity()).toBe("Account");
            expect(sut.getField()).toBe("id");
            expect(sut.getDomainMessage()).toBe(message);
            expect(sut.message).toBe(message);
        });

    });

    describe("InvalidAccountName", () => {

        it("should build an AccountError exposing the Account entity, the 'name' field and the provided code and message when invoked with valid values", () => {
            // Given
            const code = ErrorCode.TOO_SHORT;
            const message = "Account name is too short";

            // When
            const sut = AccountError.InvalidAccountName(code, message);

            expect(sut).toBeInstanceOf(AccountError);
            expect(sut).toBeInstanceOf(DomainError);
            expect(sut.getCode()).toBe(code);
            expect(sut.getEntity()).toBe("Account");
            expect(sut.getField()).toBe("name");
            expect(sut.getDomainMessage()).toBe(message);
            expect(sut.message).toBe(message);
        });

    });

    describe("InvalidAccountDescription", () => {

        it("should build an AccountError exposing the Account entity, the 'description' field and the provided code and message when invoked with valid values", () => {
            // Given
            const code = ErrorCode.TOO_LONG;
            const message = "Account description is too long";

            // When
            const sut = AccountError.InvalidAccountDescription(code, message);

            expect(sut).toBeInstanceOf(AccountError);
            expect(sut).toBeInstanceOf(DomainError);
            expect(sut.getCode()).toBe(code);
            expect(sut.getEntity()).toBe("Account");
            expect(sut.getField()).toBe("description");
            expect(sut.getDomainMessage()).toBe(message);
            expect(sut.message).toBe(message);
        });

    });

});
