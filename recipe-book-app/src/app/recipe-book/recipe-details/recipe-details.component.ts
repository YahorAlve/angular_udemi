import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { ShoppinListService } from 'src/app/shopping-list/shoppin-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() chosenRecipe: Recipe;

  constructor(private shoppingListService: ShoppinListService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addNewIngredients(this.chosenRecipe.ingredients);
  }

}
