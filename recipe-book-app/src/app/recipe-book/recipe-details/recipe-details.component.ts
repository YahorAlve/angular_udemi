import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppinListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

import * as fromRecipe from '../store/recipe.reducer';
import * as RecipeAcions from '../store/recipe.actions';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  chosenRecipeObservable: Observable<fromRecipe.State>;
  recipeName: string;
  recipeIndex: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState> ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeName = params['name'];
        this.chosenRecipeObservable = this.store.select('recipes');
        this.store.select('recipes').pipe(
          take(1),
          map((recipeState: fromRecipe.State) => {
            this.recipeIndex = this.recipeService.getRecipeIdByNameFromRcipes(this.recipeName, recipeState.recipes);
          })
        ).subscribe();
      }
    );
  }

  addIngredientsToShoppingList() {
    this.store.select('recipes').pipe(
      take(1),
      map((recipeState: fromRecipe.State) => {
        return this.store.dispatch(new ShoppinListActions.AddIngredients(recipeState.recipes[this.recipeIndex].ingredients));
      })
    ).subscribe();
  }

  deleteRecipe() {
    console.log(this.recipeName);
    this.store.dispatch(new RecipeAcions.DeleteRecipe(this.recipeIndex));
  }

}
