import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-udemi.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  /* We can subscribe in service or at component level like in case storeRecipes, there are some benifits to subscribe
  at component level in case we need to process an error in varied ways depends on component (e.g. different error messages and so on)*/
  getRecipes() {
    return this.http.get('https://ng-recipe-book-udemi.firebaseio.com/recipes.json')
                  .pipe(map(
                    (response: Response) => {
                      const recipes: Recipe[] = response.json();
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
