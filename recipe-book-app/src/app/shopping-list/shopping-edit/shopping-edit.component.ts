import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';
import { ShoppinListService } from '../shoppin-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemNumber: number;
  editedItem: IngredientModule;
  constructor(private shoppingListService: ShoppinListService, private store: Store<{shoppingList: {ingredients: IngredientModule[]}}>) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientEdited.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemNumber = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue(
          {
            name: this.editedItem.name,
            amount: this.editedItem.amount
          }
        );
      }
    );
  }

  onSubmit(form: NgForm) {
    // diff between const and let that const can be assigned only one and can't be re-assigned, let - can be
    // const ingredient = new IngredientModule(nameInput.value, +amountInput.value);
    const value = form.value;
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        index: this.editedItemNumber,
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
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemNumber));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
