import { Account } from "@ledger/domain/entity/account";
import { AccountId, AccountName, AccountDescription } from "@ledger/domain/value";
import { AccountError } from "@ledger/domain/error";
import { ErrorCode } from "@shared/value";

describe("Account", () => {

    const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const VALID_UUID = "f47ac10b-58cc-4372-a567-0e02b2c3d479";

    function buildValidVOs() {
        return {
            name: AccountName.create("Operating Account"),
            description: AccountDescription.create("Main operating account for daily transactions"),
        };
    }

    describe("create", () => {

        it("should expose the provided name and description and generate a new AccountId with a valid UUID when invoked with valid value objects", () => {
            // Given
            const { name, description } = buildValidVOs();

            // When
            const sut = Account.create(name, description);

            expect(sut.getName()).toBe(name);
            expect(sut.getDescription()).toBe(description);
            expect(sut.getId()).toBeInstanceOf(AccountId);
            expect(sut.getId().getValue()).toMatch(UUID_REGEX);
        });

        it("should generate different AccountIds on consecutive invocations", () => {
            // Given
            const { name, description } = buildValidVOs();

            // When
            const first = Account.create(name, description);
            const second = Account.create(name, description);

            expect(first.getId().getValue()).not.toBe(second.getId().getValue());
        });

    });

    describe("restore", () => {

        it("should expose the provided id, name and description when invoked with a valid UUID and valid value objects", () => {
            // Given
            const { name, description } = buildValidVOs();

            // When
            const sut = Account.restore(VALID_UUID, name, description);

            expect(sut.getId()).toBeInstanceOf(AccountId);
            expect(sut.getId().getValue()).toBe(VALID_UUID);
            expect(sut.getName()).toBe(name);
            expect(sut.getDescription()).toBe(description);
        });

        it.each([
            { value: "", description: "an empty string" },
            { value: "not-a-uuid", description: "a non-UUID string" },
            { value: "12345", description: "a string shorter than a UUID" },
        ])("should throw an AccountError with code INVALID_VALUE and field 'id' when invoked with $description", ({ value }) => {
            // Given
            const { name, description } = buildValidVOs();

            // When
            let thrown: unknown;
            try {
                Account.restore(value, name, description);
            } catch (err) {
                thrown = err;
            }

            expect(thrown).toBeInstanceOf(AccountError);
            expect((thrown as AccountError).getCode()).toBe(ErrorCode.INVALID_VALUE);
            expect((thrown as AccountError).getField()).toBe("id");
        });

    });

    describe("getters", () => {

        it("should return the AccountId, AccountName and AccountDescription instances provided at construction", () => {
            // Given
            const { name, description } = buildValidVOs();
            const sut = Account.restore(VALID_UUID, name, description);

            // When
            const id = sut.getId();
            const retrievedName = sut.getName();
            const retrievedDescription = sut.getDescription();

            expect(id).toBeInstanceOf(AccountId);
            expect(id.getValue()).toBe(VALID_UUID);
            expect(retrievedName).toBe(name);
            expect(retrievedDescription).toBe(description);
        });

    });

    describe("setName", () => {

        it("should replace the current name with the provided AccountName when invoked", () => {
            // Given
            const { name, description } = buildValidVOs();
            const sut = Account.create(name, description);
            const newName = AccountName.create("Renamed Account");

            // When
            sut.setName(newName);

            expect(sut.getName()).toBe(newName);
        });

        it("should return the same Account instance to support fluent chaining", () => {
            // Given
            const { name, description } = buildValidVOs();
            const sut = Account.create(name, description);
            const newName = AccountName.create("Renamed Account");

            // When
            const result = sut.setName(newName);

            expect(result).toBe(sut);
        });

        it("should not modify the id nor the description when only the name is replaced", () => {
            // Given
            const { name, description } = buildValidVOs();
            const sut = Account.restore(VALID_UUID, name, description);
            const originalId = sut.getId();
            const newName = AccountName.create("Renamed Account");

            // When
            sut.setName(newName);

            expect(sut.getId()).toBe(originalId);
            expect(sut.getId().getValue()).toBe(VALID_UUID);
            expect(sut.getDescription()).toBe(description);
        });

    });

    describe("setDescription", () => {

        it("should replace the current description with the provided AccountDescription when invoked", () => {
            // Given
            const { name, description } = buildValidVOs();
            const sut = Account.create(name, description);
            const newDescription = AccountDescription.create("Updated description for the account");

            // When
            sut.setDescription(newDescription);

            expect(sut.getDescription()).toBe(newDescription);
        });

        it("should return the same Account instance to support fluent chaining", () => {
            // Given
            const { name, description } = buildValidVOs();
            const sut = Account.create(name, description);
            const newDescription = AccountDescription.create("Updated description for the account");

            // When
            const result = sut.setDescription(newDescription);

            expect(result).toBe(sut);
        });

        it("should not modify the id nor the name when only the description is replaced", () => {
            // Given
            const { name, description } = buildValidVOs();
            const sut = Account.restore(VALID_UUID, name, description);
            const originalId = sut.getId();
            const newDescription = AccountDescription.create("Updated description for the account");

            // When
            sut.setDescription(newDescription);

            expect(sut.getId()).toBe(originalId);
            expect(sut.getId().getValue()).toBe(VALID_UUID);
            expect(sut.getName()).toBe(name);
        });

    });

});
