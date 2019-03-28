import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: IngredientModule;
  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editedItem = data.editedIngredient;
          this.editMode = true;
          this.slForm.setValue(
            {
              name: this.editedItem.name,
              amount: this.editedItem.amount
            }
          );
        } else {
          this.editMode = false;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    // diff between const and let that const can be assigned only one and can't be re-assigned, let - can be
    // const ingredient = new IngredientModule(nameInput.value, +amountInput.value);
    const value = form.value;
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        ingredient: new IngredientModule(value.name, value.amount)
      }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(new IngredientModule(value.name, value.amount)));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.onClear();
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
