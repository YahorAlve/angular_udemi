import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    shoppingList: fromShoppingList.State;
    auth:  fromAuth.State;
}

// we could've just put another one reducer in app.module in imports section - here is just one more example how it could be done
export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth:  fromAuth.authReducer
};
