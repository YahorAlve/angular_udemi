import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { PleaseSelectComponent } from './please-select/please-select.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeBookComponent, children: [
    /* WE need to be very carful with order we put our paths. E.g. if we put :name and then new each time
    we have in url /new it will be first considered as :id and will be an error */
    {path: '', component: PleaseSelectComponent, data: {selection: 'Recipe.'}},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    {path: ':name', component: RecipeDetailsComponent},
    {path: ':name/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
  ] },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
