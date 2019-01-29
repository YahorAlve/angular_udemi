import { Component, OnInit } from '@angular/core';
import { IngredientModule } from '../shared/ingredient/ingredient.module';
import { ShoppinListService } from './shoppin-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModule[];

  constructor(private shoppingListService: ShoppinListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IngredientModule[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
