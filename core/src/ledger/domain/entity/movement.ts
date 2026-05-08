import { EntityId, Amount } from "../../../shared/value";
import { MovementDescription, MovementType } from "../value";
import { Account } from "./account";
import { Category } from "./category";

export class Movement {

    private id: EntityId;
    private account: Account;
    private category: Category;
    private description: MovementDescription;
    private type: MovementType;
    private amount: Amount;
    private date: Date;

    private constructor(id: EntityId, account: Account, category: Category, description: MovementDescription, type: MovementType, amount: Amount, date: Date)
    {
        this.id = id;
        this.account = account;
        this.category = category;
        this.description = description;
        this.type = type;
        this.amount = amount;
        this.date = date;
    }

    public create(account: Account, category: Category, description: MovementDescription, type: MovementType, amount: Amount, date: Date): Movement
    {
        return new Movement(EntityId.create(), account, category, description, type, amount, date);
    }

    public restore(id: EntityId, account: Account, category: Category, description: MovementDescription, type: MovementType, amount: Amount, date: Date): Movement
    {
        return new Movement(id, account, category, description, type, amount, date);
    }

    getId(): EntityId
    {
        return this.id;
    }

    getAccount(): Account
    {
        return this.account;
    }

    getCategory(): Category
    {
        return this.category;
    }

    getDescription(): MovementDescription
    {
        return this.description;
    }

    setDescription(description: MovementDescription): Movement
    {
        this.description = description;
        return this;
    }

    getType(): MovementType
    {
        return this.type;
    }

    setType(type: MovementType): Movement
    {
        this.type = type;
        return this;
    }

    getAmount(): Amount
    {
        return this.amount;
    }

    setAmount(amount: Amount): Movement
    {
        this.amount = amount;
        return this;
    }

    getDate(): Date
    {
        return this.date;
    }

    setDate(date: Date): Movement
    {
        this.date = date;
        return this;
    }

}