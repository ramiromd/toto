import { EntityId } from "../../../shared/value";
import { CategoryDescription, CategoryName, CategoryColor } from "../value";

export class Category 
{
    private id: EntityId;
    private name: CategoryName;
    private parent: Category;
    private description: CategoryDescription;
    private color: CategoryColor;

    constructor(id: EntityId, parent: Category, name: CategoryName, description: CategoryDescription, color: CategoryColor)
    {
        this.id = id;
        this.parent = parent;
        this.name = name;
        this.description = description;
        this.color = color;
    }

    getId(): EntityId
    {
        return this.id;
    }

    getName(): CategoryName
    {
        return this.name;
    }

    setName(name: CategoryName): Category
    {
        this.name = name;
        return this;
    }

    getParent(): Category
    {
        return this.parent;
    }

    setParent(parent: Category): Category
    {
        this.parent = parent;
        return this;
    }

    getDescription(): CategoryDescription
    {
        return this.description;
    }

    setDescription(description: CategoryDescription): Category
    {
        this.description = description;
        return this;
    }

    getColor(): CategoryColor
    {
        return this.color;
    }

    setColor(color: CategoryColor): Category
    {
        this.color = color;
        return this;
    }
}