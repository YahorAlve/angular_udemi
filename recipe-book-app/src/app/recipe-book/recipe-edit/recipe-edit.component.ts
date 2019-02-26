import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  name: string;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.editMode = params['name'] != null;
        console.log(this.editMode);
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByName(this.name);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup(
              {
                'name': new FormControl(ingredient.name),
                'amount': new FormControl(ingredient.amount)
              }
            )
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'nameControl': new FormControl(recipeName),
      'imagePathControl': new FormControl(recipeImagePath),
      'descritptionControl': new FormControl(recipeDescription),
      'recipeIngredientsControl': recipeIngredients
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  addIngredients() {
    (<FormArray> this.recipeForm.get('recipeIngredientsControl')).push(
      new FormGroup(
        {
          'name': new FormControl(),
          'amount': new FormControl()
        }
      )
    );
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('recipeIngredientsControl')).controls;
  }

}
