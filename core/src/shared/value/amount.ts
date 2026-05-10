import { Currency } from "./currency";
import { dinero, Dinero } from 'dinero.js';

export class Amount
{
    private currency: Currency;

    private value: Dinero<number, string>;

    public constructor(value: number, currency: Currency)
    {
        let _value = dinero({ amount: value, currency: this.currencyToDineroCurrency(currency) });
        this.value = _value;
        this.currency = currency;
    }

    private currencyToDineroCurrency(currency: Currency): any
    {
        return {code: currency.toString(), base: 10, scale: 2};
    }
}