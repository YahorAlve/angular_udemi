import { Recipe } from '../recipe.module';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';

import * as RecipeActions from './recipe.actions';

export interface FeatureState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe(
          'Test Name 1',
          'Test Description 1',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png',
          [new IngredientModule('Meat', 2), new IngredientModule('Bread', 2)]
        ),
        new Recipe(
          'Test Name 2',
          'Test Description 2',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/155px-Recipe-575434.svg.png',
          [new IngredientModule('Meat', 5), new IngredientModule('Bread', 5)]
        )
    ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                // to distribute in imutable way in array recipes
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
        const oldRecipe = state.recipes[action.payload.index];
        const updatedRecipe = {
            ...oldRecipe,
            ...action.payload.updatedRecipe
        };
        const updatedRecipes = [...state.recipes];
        updatedRecipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: updatedRecipes
            };
        case (RecipeActions.DELETE_RECIPE):
        const recipes = [...state.recipes];
        recipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: recipes
            };
        default:
            return state;
    }
}
