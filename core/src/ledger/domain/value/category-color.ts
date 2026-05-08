export class CategoryColor
{
    private value: string;

    constructor(value: string)
    {
        this.checkFormat(value);
        this.value = value;
    }

    public getValue(): string
    {
        return this.value;
    }

    private checkFormat(value: string)
    {
        let pattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
        if (value == null || !pattern.test(value)) {
            throw new Error(`Category color must be a valid hexadecimal color (e.g. #FFF or #FFFFFF).`);
        }
    }
}
