import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientModule } from 'src/app/shared/ingredient/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() submitNewIngredient = new EventEmitter<IngredientModule>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.submitNewIngredient.emit(new IngredientModule(nameInput.value, +amountInput.value));
  }

}
