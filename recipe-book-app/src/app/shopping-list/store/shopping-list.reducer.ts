// import * as ShoppingListActions will bundle everything exported from 'filename' in one json file with name ShoppingListActions
import * as ShoppingListActions from './shopping-list.actions';

import { IngredientModule } from '../../shared/ingredient/ingredient.module';

export interface AppState {
    shoppingList: State;
}
export interface State {
    ingredients: IngredientModule[];
    editedIngredient: IngredientModule;
    editedIngredientIndex: number;
}

const initialState: State = {
    // since we are in object we assign values throug : instead of =
    // in object it means in json javascript object
    ingredients: [
        new IngredientModule('Apples', 5),
        new IngredientModule('Tomatoes', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

/* state = initialState in function the way to have default value for state */
/* ShoppingListActions.ShoppingListActions we are reaching  property ShoppingListActions from imported as ShoppingListActions*/
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    /* ngrx will replace old state with new return one by reducer */
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                // ...state is syntax we can extand object. By typing this we inserted all values of object state
                ...state,
                // if we put any key/value pairs after it will replace this properties from ...state object, in our case ingredients
                // we also can use this to extand ingredients array
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            // all these actions just made to workj with copy of ingredient list not with real one, not realy sure why it is important if 
            // still going to overwrite the state
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                // by this we spread all properties of current ingredient in current json
                ...ingredient,
                // by this we overrite all properties of current with new one values
                ...action.payload.ingredient
            };
            // now we need to add this updatedIngredient to array
            // this is just copy of current ingredients
            const ingredients = [...state.ingredients];
            // update one ingredient at specific possition
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            // update one ingredient at specific possition
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients
            };
        case ShoppingListActions.START_EDIT:
        // Mentor mentioned if we want to do it in imutable way we can put spread operator ... looks like it copies values
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };
        default:  return state;
    }
}
