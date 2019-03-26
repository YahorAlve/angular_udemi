import { Action } from '@ngrx/store';
import { IngredientModule } from '../shared/ingredient/ingredient.module';

const initialState = {
    // since we are in object we assign values throug : instead of =
    // in object it means in json javascript object
    ingredients: [
        new IngredientModule('Apples', 5),
        new IngredientModule('Tomatoes', 10)
    ]
};

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

/* state = initialState in function the way to have default value for state */
export function shoppingListReducer(state = initialState, action: Action) {
    /* ngrx will replace old state with new return one by reducer */
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                // ...state is syntax we can extand object. By typing this we inserted all values of object state
                ...state,
                // if we put any key/value pairs after it will replace this properties from ...state object, in our case ingredients
                // we also can use this to extand ingredients array
                ingredients: [...state.ingredients, action]
            };
    }
    return state;
}
