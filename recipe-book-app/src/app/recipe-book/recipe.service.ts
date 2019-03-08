import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';
import { IngredientModule } from '../shared/ingredient/ingredient.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Name 1',
      'Test Description 1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png',
      [new IngredientModule('Meat', 2), new IngredientModule('Bread', 2)]
    ),
    new Recipe(
      'Test Name 2',
      'Test Description 2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png',
      [new IngredientModule('Meat', 5), new IngredientModule('Bread', 5)]
    )
  ];

  constructor() { }

  /* If we return this.recipies it will return reference to an array and as result we could modify array content
  out of service. If we add slice() it will return copy of array. (slice() returns from - to array, by default from start to end)*/
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByName(name: string): Recipe {
    for (const recipe of this.recipes.slice()) {
      if ( recipe.name === name ) {
        return recipe;
      }
    }
    return null;
  }

  getRecipeIdByName(name: string): number {
    let index = 0;
    for (const recipe of this.recipes) {
      if ( recipe.name === name ) {
        return index;
      }
      index++;
    }
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipeName: string) {
    this.recipes.splice(this.getRecipeIdByName(recipeName), 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

}
