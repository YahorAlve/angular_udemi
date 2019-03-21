import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  /* WE need to be very carful with order we put our paths. E.g. if we put :name and then new each time
    we have in url /new it will be first considered as :id and will be an error */
  /* { path: '', redirectTo: '/recipes', pathMatch: 'full' }, */
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipe-book/recipes.module#RecipesModule' },
  /* For routing it is not important to have component and routing module in the same direcotiry, it is just important
  that we declare this component somewhere before it gets used.
  But if we use selector in html like app-shoppinglist-component in app-component it will fail as it is requered to have it declared or
  imported through other module which exports this component.*/
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  /* {preloadingStrategy: PreloadAllModules} will preload in background all Lazy loading modules so that code is ready at time
  we switch to route with lazy loading module - in our case /recipes */
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
