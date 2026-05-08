export class MovementDescription 
{
    private value: string;

    private constructor(value: string)
    {
        this.checkMaxLength(value);
        this.value = value;
    }

    static create(value: string): MovementDescription
    {
        return new MovementDescription(value);
    }

    public getValue(): string
    {
        return this.value;
    }

    private checkMaxLength(value: string)
    {
        let max = 100;
        if (value == null || value.length > max) {
            throw new Error(`Movement description must be less than ${max} characters long.`);
        }
    }
}