import { AccountId, AccountDescription, AccountName } from "@ledger/domain/value";

export class Account 
{
    private id: AccountId;
    private name: AccountName;
    private description: AccountDescription;

    private constructor(id: AccountId, name: AccountName, description: AccountDescription) 
    {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static create(name: AccountName, description: AccountDescription): Account 
    {
        return new Account(AccountId.create(), name, description);
    }

    static restore(id: string, name: AccountName, description: AccountDescription): Account
    {
        return new Account(AccountId.restore(id), name, description);
    }

    getId(): AccountId
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