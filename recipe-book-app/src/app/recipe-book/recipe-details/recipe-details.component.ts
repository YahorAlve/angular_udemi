import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppinListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  chosenRecipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState> ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.chosenRecipe = this.recipeService.getRecipeByName(params['name']);
      }
    );
  }

  addIngredientsToShoppingList() {
    this.store.dispatch(new ShoppinListActions.AddIngredients(this.chosenRecipe.ingredients));
  }

  deleteRecipe() {
    console.log(this.chosenRecipe.name);
    this.recipeService.deleteRecipe(this.chosenRecipe.name);
  }

}
