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
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
