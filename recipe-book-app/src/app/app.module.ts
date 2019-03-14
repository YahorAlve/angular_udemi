import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PleaseSelectComponent } from './please-select/please-select.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipesModule } from './recipe-book/recipes.module';

@NgModule({
  /* In declarations we put Components, Directives and Pipes the module uses. */
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    PageNotFoundComponent,
    SignupComponent,
    SigninComponent
  ],
  /* In imports modules which current module is using. From importated modules will be only importated stuff which is 
  exported. E.g. FormsModule has exported form directives (@NgForm) we can use after importing this FormsModule. */
  imports: [
    BrowserModule,
    FormsModule,
    /* There is some importance to have RecipesModule (which includes RecipeRouting Modules) before AppRoutingModule for working
    wildCards correctly. But was not clear why just looks some specific how angular builds/maps routing pathes while injecting child 
    modules. */
    RecipesModule,
    AppRoutingModule,
    HttpModule
  ],
  /* Providrs we already know if put below it one same instnace will be shared among whole application. I am unsing anatation in root.*/
  /* But we still leave RecipeService in root as it is used amon other components - not only Recipe Feature.
  Usually we should not move service into Feature level but technically like mentioned lector It would still work
  as default behaviour of angular to load all modules and inject them in root of app.*/
  providers: [],
  /* It is just first component our application should start form. In our case app.component.html will be loaded first.  */
  bootstrap: [AppComponent]
})
export class AppModule { }
