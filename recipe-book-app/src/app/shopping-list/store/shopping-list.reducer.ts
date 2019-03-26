// import * as ShoppingListActions will bundle everything exported from 'filename' in one json file with name ShoppingListActions
import * as ShoppingListActions from './shopping-list.actions';

import { IngredientModule } from '../../shared/ingredient/ingredient.module';

const initialState = {
    // since we are in object we assign values throug : instead of =
    // in object it means in json javascript object
    ingredients: [
        new IngredientModule('Apples', 5),
        new IngredientModule('Tomatoes', 10)
    ]
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
        default:  return state;
    }
}
