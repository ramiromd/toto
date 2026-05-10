/**
 * Represents the data of an error, including its code, message, entity and field.
 */
export class ErrorData {

    private readonly code: string;
    private readonly message: string;
    private readonly entity: string;
    private readonly field: string;

    public constructor(code: string, message: string, entity: string, field: string) {
        this.code = code;
        this.message = message;
        this.entity = entity;
        this.field = field;
    }

    public getCode(): string {
        return this.code;
    }

    public getMessage(): string {
        return this.message;
    }

    public getEntity(): string {
        return this.entity;
    }

    public getField(): string {
        return this.field;
    }

}