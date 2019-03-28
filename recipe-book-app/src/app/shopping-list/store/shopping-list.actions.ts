import { Action } from '@ngrx/store';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';

export class AddIngredient implements Action {
    // we need to implement property type and that is it. Then we can add any other properties as payload and so on
    readonly type = ADD_INGREDIENT;
    constructor(public payload: IngredientModule) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public payload: IngredientModule[]) {}
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT;
    constructor(public payload: {ingredient: IngredientModule}) {}
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
    readonly type = START_EDIT;
    constructor(public payload: number) {}
}

// type is typescript feature we can create our own type and assign others to it. Will be handy when there'll be more actions
export type ShoppingListActions = AddIngredient
    | AddIngredients
    | UpdateIngredient
    | DeleteIngredient
    | StartEdit;
