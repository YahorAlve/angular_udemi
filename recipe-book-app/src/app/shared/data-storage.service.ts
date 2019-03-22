import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.module';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getTokenId();
    return this.httpClient.put('https://ng-recipe-book-udemi.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  /* We can subscribe in service or at component level like in case storeRecipes, there are some benifits to subscribe
  at component level in case we need to process an error in varied ways depends on component (e.g. different error messages and so on)*/
  getRecipes() {
    /*
    If we are going to do like below :
    let tk = '';
    this.authService.getTokenId()
      .then(
        (token: string) => {
          tk = token;
        }
      );
    We won't be able to use tk token variable as it will be empty till promise will be completed and as result in following functions
    we will be having values, that is how observables work - asynchroniously - execution will proceed and won't wait for returned
    values.
    */
    /* Executing get inside callback of promise also not teh best soultion as we can't return observable as we are doing in storeRecipe 
    (in case we need to do it)*/
    /* Below will garantee us that some token will be returned (in some cases expired as design not the best)  */
    const token = this.authService.getTokenId();
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-udemi.firebaseio.com/recipes.json?auth=' + token, {
        observe: 'body',
        responseType: 'json'
        // in new httpclient we can add more properties like that for automatic proccessning of our response
        // (for options need to read documentation)
    }
    )
                  .pipe(map(
                    // default behaviour extract json values - can be overwritten
                    // instead of recipes: Recipe[] - we can set up generic in get<Recipe[]>
                    (recipes) => {
                      for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                          console.log(recipe);
                          recipe['ingredients'] = [];
                        }
                      }
                      return recipes;
                    }
                  ))
                  /* So when we use map we recreate another observable with new one return type and now subscribe 
                  to this new type*/
                  .subscribe(
                        (recipes: Recipe[]) => {
                            this.recipeService.setRecipes(recipes);
                        }
                  );
  }
}
