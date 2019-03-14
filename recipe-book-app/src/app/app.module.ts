import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  /* In declarations we put Components, Directives and Pipes the module uses. */
  declarations: [
    AppComponent
  ],
  /* In imports modules which current module is using. From importated modules will be only importated stuff which is
  exported. E.g. FormsModule has exported form directives (@NgForm) we can use after importing this FormsModule. */
  imports: [
    BrowserModule,
    /* We moved FormsModule as directives exposed by this module only used in shoppingListModule. But be aware that
    mentor mentioned stuff exposed(exported) by Module are avalable in modules directly importing them. So if we want to use 
    directives of FormsModule in appModule and shoppinListModule we need to import them in both places.*/
    /* Actially FormsModule is used in SignUp SignIn forms as well and application will fail as this is not imported in app module anymore
    but we can export FormsModule in ShoppingModule (not best practice) or create separate AuthModule and import it there. */
    /* There is some importance to have RecipesModule (which includes RecipeRouting Modules) before AppRoutingModule for working
    wildCards correctly. But was not clear why just looks some specific how angular builds/maps routing pathes while injecting child
    modules. */
    /* When we put here directly imports Modules webpack will build main inital bundle js file with all parts which is
    included in these Modules, but if we want lazy loading for some modules we need to remove them from these imports and make corrections
    in routing module using string path to module we want to load. */
    AuthModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    /* Because of this router wildcard thing i put CoreModule last it looks that it adds patthes into list in sequence
    you put your Modules in Imports and we know that if wildcard route will be before other urls it will called first what 
    means all urls after will just be overwritten by this wildcard mapping. */
    CoreModule
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
