import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

currentRecipe: Recipe = new Recipe(
    '',
    '',
    ''
  );

  constructor() { }

  ngOnInit() {
  }

}
