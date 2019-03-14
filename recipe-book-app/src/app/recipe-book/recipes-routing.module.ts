import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book.component';
import { PleaseSelectComponent } from '../please-select/please-select.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AuthGuardService } from '../auth/auth-guard.service';


const recipeRoutes: Routes = [
  { path: 'recipes', component: RecipeBookComponent, children: [
    {path: '', component: PleaseSelectComponent, data: {selection: 'Recipe.'}},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    {path: ':name', component: RecipeDetailsComponent},
    {path: ':name/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
  ] },
];

@NgModule({
  /* Only for main app rouiting we put for root, for any other routing modules of application we put forChild,
  eventially everything will be injected in one big root file but looks it is needed for doing so properly. */
  imports: [RouterModule.forChild(recipeRoutes)],
  /* We export here RouterModule which now has our recipeRouters cause forChild and forRoot are static construction
  functions.*/
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
