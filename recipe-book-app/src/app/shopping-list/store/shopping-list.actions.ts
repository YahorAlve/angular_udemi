import { Action } from '@ngrx/store';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    // we need to implement property type and that is it. Then we can add any other properties as payload and so on
    readonly type = ADD_INGREDIENT;
    payload: IngredientModule;
}

// type is typescript feature we can create our own type and assign others to it. Will be handy when there'll be more actions
export type ShoppingListActions = AddIngredient;
