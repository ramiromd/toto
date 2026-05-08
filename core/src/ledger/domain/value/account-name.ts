export class AccountName
{
    private value: string;

    private constructor(value: string)
    {
        this.checkMinLength(value);
        this.checkMaxLength(value);
        this.value = value;
    }

    static create(value: string): AccountName
    {
        return new AccountName(value);
    }

    public getValue(): string
    {
        return this.value;
    }

    private checkMinLength(value: string)
    {
        let min = 3
        if (value == null || value.length < min) {
            throw new Error(`Account name must be at least ${min} characters long.`);
        }
    }

    private checkMaxLength(value: string)
    {
        let max = 64;
        if (value == null || value.length > max) {
            throw new Error(`Account name must be less than ${max} characters long.`);
        }
    }
}