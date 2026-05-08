import { EntityId } from "../../../shared/value";
import { AccountDescription, AccountName } from "../value";

export class Account 
{

    private id: EntityId;
    private name: AccountName;
    private description: AccountDescription;

    private constructor(id: EntityId, name: AccountName, description: AccountDescription) 
    {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static create(name: AccountName, description: AccountDescription): Account 
    {
        return new Account(EntityId.create(), name, description);
    }

    static restore(id: string, name: AccountName, description: AccountDescription): Account
    {
        return new Account(EntityId.restore(id), name, description);
    }

    getId(): EntityId
    {
        return this.id;
    }

    getName(): AccountName
    {
        return this.name;
    }

    setName(name: AccountName): Account
    {
        this.name = name;
        return this;
    }

    getDescription(): AccountDescription
    {
        return this.description;
    }

    setDescription(description: AccountDescription): Account
    {
        this.description = description;
        return this;
    }
}