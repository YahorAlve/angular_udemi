import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';
import { ShoppinListService } from '../shoppin-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

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
  constructor(private shoppingListService: ShoppinListService) { }

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
      this.shoppingListService.updateIngredient(this.editedItemNumber, new IngredientModule(value.name, value.amount));
    } else {
      this.shoppingListService.addNewIngredient(new IngredientModule(value.name, value.amount));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
