import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { ShoppinListService } from 'src/app/shopping-list/shoppin-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  chosenRecipe: Recipe;

  constructor(private shoppingListService: ShoppinListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.chosenRecipe = this.recipeService.getRecipeByName(params['name']);
      }
    );
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addNewIngredients(this.chosenRecipe.ingredients);
  }

  deleteRecipe() {
    console.log(this.chosenRecipe.name);
    this.recipeService.deleteRecipe(this.chosenRecipe.name);
  }

}
