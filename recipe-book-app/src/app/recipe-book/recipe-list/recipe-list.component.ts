import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  // assing array type to property for typescript we can by name: type[]
  recipies: Recipe[] = [
    new Recipe(
      'Test Name 1',
      'Test Description 1',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png'
    ),
    new Recipe(
      'Test Name 2',
      'Test Description 2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
