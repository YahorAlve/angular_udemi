import { IngredientModule } from '../shared/ingredient/ingredient.module';

export class Recipe {
    // that is how types assigned to properties -> name: type;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: IngredientModule[];

    constructor(name: string, desc: string, imagePath: string, ingredients: IngredientModule[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
