import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.module';

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
                .subscribe(
                  (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    this.recipeService.setRecipes(recipes);
                  }
                );
  }
}
