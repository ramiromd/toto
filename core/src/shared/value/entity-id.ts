import { validate as UuidValidate, v4 as Uuid } from 'uuid';

export class EntityId {
  
    private readonly value: string;


    private constructor(value: string) 
    {
        this.checkString(value);
        this.value = value;
    }

    static create(): EntityId 
    {
        return new EntityId(Uuid());
    }

    static restore(value: string): EntityId 
    {
        return new EntityId(value);
    }

    private checkString(value: string): void 
    {
        if (!UuidValidate(value)) {
            throw new Error(`Invalid entity id value: ${value}`);
        }
    }
}