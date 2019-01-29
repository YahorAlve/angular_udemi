import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

currentRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeChosen.subscribe(
      // JavaScript ES6 syntax (Parametrs of function - (name: type) => {function which will use parametrs})
      (recipe: Recipe) => {
        this.currentRecipe = recipe;
      }
    );
  }

}
