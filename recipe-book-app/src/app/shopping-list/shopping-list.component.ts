import { Component, OnInit } from '@angular/core';
import { IngredientModule } from '../shared/ingredient/ingredient.module';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // looks if we inject service for component it gets reloaded with componet eaach time and just looisng data
  // Ingredients array. If we boot it in APpModule (in root) - it keeps all data
  // providers:[ShoppingListComponent]
})
export class ShoppingListComponent implements OnInit {

  subscription: Subscription;

  shoppingListState: Observable<{ingredients: IngredientModule[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // here select name of slice of store provided in app.module
    this.shoppingListState = this.store.select('shoppingList');
    /* this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IngredientModule[]) => {
        this.ingredients = ingredients;
      }
    ); */
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  /* ngOnDestroy(): void {
    // We need to destroy it as this observable from rjxs not from angular/core
    this.subscription.unsubscribe();
  }
 */
}
