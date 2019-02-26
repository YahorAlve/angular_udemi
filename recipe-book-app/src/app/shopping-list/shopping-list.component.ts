import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientModule } from '../shared/ingredient/ingredient.module';
import { ShoppinListService } from './shoppin-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // looks if we inject service for component it gets reloaded with componet eaach time and just looisng data
  // Ingredients array. If we boot it in APpModule (in root) - it keeps all data
  // providers:[ShoppingListComponent]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  ingredients: IngredientModule[];

  constructor(private shoppingListService: ShoppinListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IngredientModule[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.ingredientEdited.next(index);
  }

  ngOnDestroy(): void {
    // We need to destroy it as this observable from rjxs not from angular/core
    this.subscription.unsubscribe();
  }

}
