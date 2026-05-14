import { ErrorData } from "@shared/value";

describe("ErrorData", () => {

    it("should expose the code, message, entity and field provided when constructed with valid values", () => {
        // Given
        const code = "INVALID_FORMAT";
        const message = "Value does not match the expected format";
        const entity = "Account";
        const field = "id";

        // When
        const sut = new ErrorData(code, message, entity, field);

        expect(sut.getCode()).toBe(code);
        expect(sut.getMessage()).toBe(message);
        expect(sut.getEntity()).toBe(entity);
        expect(sut.getField()).toBe(field);
    });

});
