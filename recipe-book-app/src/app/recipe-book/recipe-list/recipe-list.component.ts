import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeDetails = new EventEmitter<Recipe>();
  // assing array type to property for typescript we can by name: type[]
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelectedRecipe(recipe: Recipe) {
    console.log('Change current Recipe : ' + recipe.name);
    this.recipeDetails.emit(recipe);
  }
}
