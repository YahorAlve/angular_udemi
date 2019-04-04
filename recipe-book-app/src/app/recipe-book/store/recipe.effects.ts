import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromRecipe from '../store/recipe.reducer';
import * as RecipeActions from '../store/recipe.actions';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe.module';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {

    constructor(private actions$: Actions, private httpClient: HttpClient) {}

    @Effect()
    recipesFetch = this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap(() => {
            return this.httpClient.get<Recipe[]>('https://ng-recipe-book-udemi.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json',
            });
        }),
        map((recipes: Recipe[]) => {
                      for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                          console.log(recipe);
                          recipe['ingredients'] = [];
                        }
                      }
            return {
                type: RecipeActions.SET_RECIPES,
                payload: recipes
            };
        })
    );
}
