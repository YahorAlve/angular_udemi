import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.module';

import * as recipeActions from '../store/recipe.actions';
import * as recipeReducer from '../store/recipe.reducer';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  name: string;
  editMode = false;
  editItemId: number;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private store: Store<recipeReducer.FeatureState>) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.editMode = params['name'] != null;
        console.log(this.editMode);
        if (this.editMode) {
          this.store.select('recipes').pipe(
            take(1),
            map((recipeState: recipeReducer.State) => {
              this.editItemId = this.recipeService.getRecipeIdByNameFromRcipes(this.name, recipeState.recipes);
            })
          ).subscribe();
        }
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
      this.store.select('recipes').pipe(
        take(1),
        map((state: recipeReducer.State) => {
          const recipe = state.recipes[this.editItemId];
          recipeName = recipe.name;
          recipeImagePath = recipe.imagePath;
          recipeDescription = recipe.description;
          if (recipe.ingredients) {
            for (const ingredient of recipe.ingredients) {
              recipeIngredients.push(
                new FormGroup(
                  {
                    'name': new FormControl(ingredient.name, Validators.required),
                    'amount': new FormControl(ingredient.amount, [
                      Validators.required,
                      Validators.pattern(/^[0-9]+[0-9]*$/)
                    ])
                  }
                )
              );
            }
          }
        })
      ).subscribe();
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    /* const recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'],
    ); */
    /* One of advantages of Reactive approach as our FormGroup has exact the same structure and the same field names
       we can just pass FormGroup as an Recipe argument.
    */
    if (this.editMode) {
      this.store.dispatch(new recipeActions.UpdateRecipe({index: this.editItemId, updatedRecipe: this.recipeForm.value}));
    } else {
      this.store.dispatch(new recipeActions.AddRecipe(this.recipeForm.value));    }
    this.router.navigate(['']);
  }

  addIngredients() {
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup(
        {
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[0-9]+[0-9]*$/)
          ])
        }
      )
    );
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
