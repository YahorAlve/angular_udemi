import { Injectable, EventEmitter } from '@angular/core';
import { IngredientModule } from '../shared/ingredient/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppinListService {

  ingredientsChanged = new EventEmitter<IngredientModule[]>();

  private ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 5),
    new IngredientModule('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient: IngredientModule) {
    this.ingredients.push(newIngredient);
    console.log('Ingredients was added ' + newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addNewIngredients(newIngredients: IngredientModule[]) {
    // this.ingredients.concat creates new array that is why we need to assign it to our this.ingredients to re-point it
    // to new updated array
    this.ingredients = this.ingredients.concat(newIngredients);
    console.log('Ingredients were added ' + newIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
