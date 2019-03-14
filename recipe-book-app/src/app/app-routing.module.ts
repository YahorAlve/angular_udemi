import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  /* WE need to be very carful with order we put our paths. E.g. if we put :name and then new each time
    we have in url /new it will be first considered as :id and will be an error */
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  /* For routing it is not important to have component and routing module in the same direcotiry, it is just important
  that we declare this component somewhere before it gets used.
  But if we use selector in html like app-shoppinglist-component in app-component it will fail as it is requered to have it declared or
  imported through other module which exports this component.*/
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
