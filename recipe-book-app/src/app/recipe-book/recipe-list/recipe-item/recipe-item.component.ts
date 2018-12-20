import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // assing array type to property for typescript we can by name: type[]
  recipies: Recipe[] = [
    new Recipe('Test Name', 'Test Description', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
