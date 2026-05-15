import { ErrorData } from "../value";

/**
 * Base class for domain errors. It encapsulates the error data and provides methods to access it.
 */
export class DomainError extends Error
{
    private readonly data: ErrorData;
    
    public constructor(data: ErrorData) {
        super(data.getMessage());
        this.data = data;
    }

    public getCode(): string {
        return this.data.getCode();
    }

    public getEntity(): string {
        return this.data.getEntity();
    }

    public getField(): string {
        return this.data.getField();
    }

    public getDomainMessage(): string {
        return this.data.getMessage();
    }
}