import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';
import { ShoppinListService } from '../shoppin-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppinListService) { }

  ngOnInit() {
  }

  onSubmit(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    // diff between const and let that const can be assigned only one and can't be re-assigned, let - can be
    // const ingredient = new IngredientModule(nameInput.value, +amountInput.value);
    this.shoppingListService.addNewIngredient(new IngredientModule(nameInput.value, +amountInput.value));
  }

}
