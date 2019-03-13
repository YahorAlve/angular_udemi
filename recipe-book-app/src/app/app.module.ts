import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PleaseSelectComponent } from './please-select/please-select.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  /* In declarations we put Components, Directives and Pipes the module uses. */
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    PageNotFoundComponent,
    PleaseSelectComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent
  ],
  /* In imports modules which current module is using. From importated modules will be only importated stuff which is 
  exported. E.g. FormsModule has exported form directives (@NgForm) we can use after importing this FormsModule. */
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  /* Providrs we already know if put below it one same instnace will be shared among whole application. I am unsing anatation in root.*/
  providers: [],
  /* It is just first component our application should start form. In our case app.component.html will be loaded first.  */
  bootstrap: [AppComponent]
})
export class AppModule { }
