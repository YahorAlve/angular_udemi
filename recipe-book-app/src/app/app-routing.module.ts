import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeBookComponent, children: [
    {path: ':name', component: RecipeDetailsComponent}
  ] },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
