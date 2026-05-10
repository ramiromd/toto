import { ErrorCode } from "../../../../src/shared/value";

describe("ErrorCode", () => {

    it.each([
        ["TOO_SHORT", ErrorCode.TOO_SHORT],
        ["TOO_LONG", ErrorCode.TOO_LONG],
        ["INVALID_FORMAT", ErrorCode.INVALID_FORMAT],
        ["INVALID_VALUE", ErrorCode.INVALID_VALUE],
    ])("should expose the matching string value when reading the %s member", (expected, value) => {
        expect(value).toBe(expected);
    });

});
