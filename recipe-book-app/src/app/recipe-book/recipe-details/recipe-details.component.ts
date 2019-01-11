import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() chosenRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
