import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChosen = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Name 1',
      'Test Description 1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png'
    ),
    new Recipe(
      'Test Name 2',
      'Test Description 2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png'
    )
  ];

  constructor() { }

  /* If we return this.recipies it will return reference to an array and as result we could modify array content
  out of service. If we add slice() it will return copy of array. (slice() returns from - to array, by default from start to end)*/
  getRecipes() {
    return this.recipes.slice();
  }
}
