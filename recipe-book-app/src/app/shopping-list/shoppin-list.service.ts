/* import { Injectable } from '@angular/core';
import { IngredientModule } from '../shared/ingredient/ingredient.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppinListService {

  ingredientsChanged = new Subject<IngredientModule[]>();
  ingredientEdited = new Subject<number>();

  private ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 5),
    new IngredientModule('Tomatoes', 10)
  ];

  constructor() { }

  /* getIngredients() {
    return this.ingredients.slice();
  }*/

  /* getIngredient(index: number) {
    return this.ingredients[index];
  }
 */
  /* addNewIngredient(newIngredient: IngredientModule) {
    this.ingredients.push(newIngredient);
    console.log('Ingredients was added ' + newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
 */

  // addNewIngredients(newIngredients: IngredientModule[]) {
    // this.ingredients.concat creates new array that is why we need to assign it to our this.ingredients to re-point it
    // to new updated array
    // this.ingredients = this.ingredients.concat(newIngredients);
    /* it is a ES6 feature called spread operator ... by this we convert array  to list */
    /* this.ingredients.push(...newIngredients);
    console.log('Ingredients were added ' + newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  } */

  /* updateIngredient(index: number, ingredient: IngredientModule) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  } */

/* } */
