export class AccountDescription 
{
    private value: string;

    private constructor(value: string)
    {
        this.checkMinLength(value);
        this.checkMaxLength(value);
        this.value = value;
    }

    static create(value: string): AccountDescription
    {
        return new AccountDescription(value);
    }

    public getValue(): string
    {
        return this.value;
    }

    private checkMinLength(value: string)
    {
        let min = 3
        if (value == null || value.length < min) {
            throw new Error(`Account description must be at least ${min} characters long.`);
        }
    }

    private checkMaxLength(value: string)
    {
        let max = 100;
        if (value == null || value.length > max) {
            throw new Error(`Account description must be less than ${max} characters long.`);
        }
    }
}