import { AccountName } from "../../../../../src/ledger/domain/value/account-name";
import { AccountError } from "../../../../../src/ledger/domain/error";
import { ErrorCode } from "../../../../../src/shared/value";

describe("AccountName", () => {

    it("should expose the provided value via getValue when constructed with a valid name", () => {
        // Given
        const value = "Operating Account";

        // When
        const sut = AccountName.create(value);

        expect(sut.getValue()).toBe(value);
    });

    it.each([
        { length: 3, label: "the minimum allowed length" },
        { length: 64, label: "the maximum allowed length" },
    ])("should accept a value at $label", ({ length }) => {
        // Given
        const value = "a".repeat(length);

        // When
        const sut = AccountName.create(value);

        expect(sut.getValue()).toBe(value);
    });

    it.each([
        { value: null, description: "null" },
        { value: "", description: "an empty string" },
        { value: "ab", description: "a value shorter than the minimum allowed length" },
    ])("should throw an AccountError with code TOO_SHORT when constructed with $description", ({ value }) => {
        // When
        let thrown: unknown;
        try {
            AccountName.create(value as string);
        } catch (err) {
            thrown = err;
        }

        expect(thrown).toBeInstanceOf(AccountError);
        expect((thrown as AccountError).getCode()).toBe(ErrorCode.TOO_SHORT);
        expect((thrown as AccountError).getField()).toBe("name");
    });

    it("should throw an AccountError with code TOO_LONG when constructed with a value longer than the maximum allowed length", () => {
        // Given
        const value = "a".repeat(65);

        // When
        let thrown: unknown;
        try {
            AccountName.create(value);
        } catch (err) {
            thrown = err;
        }

        expect(thrown).toBeInstanceOf(AccountError);
        expect((thrown as AccountError).getCode()).toBe(ErrorCode.TOO_LONG);
        expect((thrown as AccountError).getField()).toBe("name");
    });

});
