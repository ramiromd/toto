import { AccountId } from "../../../../../src/ledger/domain/value/account-id";
import { AccountError } from "../../../../../src/ledger/domain/error";
import { ErrorCode } from "../../../../../src/shared/value";

describe("AccountId", () => {

    const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    describe("create", () => {

        it("should generate a new AccountId exposing a valid UUID via getValue when invoked without arguments", () => {
            // When
            const sut = AccountId.create();

            expect(sut.getValue()).toMatch(UUID_REGEX);
        });

        it("should generate different UUIDs on consecutive invocations", () => {
            // When
            const first = AccountId.create();
            const second = AccountId.create();

            expect(first.getValue()).not.toBe(second.getValue());
        });

    });

    describe("restore", () => {

        it("should expose the provided UUID via getValue when constructed with a valid UUID", () => {
            // Given
            const value = "f47ac10b-58cc-4372-a567-0e02b2c3d479";

            // When
            const sut = AccountId.restore(value);

            expect(sut.getValue()).toBe(value);
        });

        it.each([
            { value: "", description: "an empty string" },
            { value: "not-a-uuid", description: "a non-UUID string" },
            { value: "12345", description: "a string shorter than a UUID" },
            { value: "f47ac10b-58cc-4372-a567", description: "a truncated UUID" },
            { value: "f47ac10b58cc4372a5670e02b2c3d479", description: "a UUID without hyphens" },
        ])("should throw an AccountError with code INVALID_VALUE when constructed with $description", ({ value }) => {
            // When
            let thrown: unknown;
            try {
                AccountId.restore(value);
            } catch (err) {
                thrown = err;
            }

            expect(thrown).toBeInstanceOf(AccountError);
            expect((thrown as AccountError).getCode()).toBe(ErrorCode.INVALID_VALUE);
            expect((thrown as AccountError).getField()).toBe("id");
        });

    });

});
