import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { PleaseSelectComponent } from '../please-select/please-select.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './store/recipe.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './store/recipe.effects';


/* Just reminder that import above is fro typescript, when cli(webpack) builds source angular files it needs
to parse ts and type class name to real angular code. Import in @NgModule is for real angular.*/
@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    PleaseSelectComponent
    /* As DropDownDirective is used among different features it should be presented in both in case we are starting them
    separatly. */
    /* BUT Very important note we must not dublicate same declarations for modules, we can dublicate services, modules but
    NOT declarations. That is why we won't declare it as it conflicts with AppModule declaration and it will still work.*/
    // DropdownDirective
  ],
  /* CommonModule gives us access to most of features of Angular (ngIf, ngFor and so on) and chances are high
  our module will utilize them, that is why we are importing it. In AppModule we use instead BrowserModule which
  contains all features of CommonModule and some more which is only requered for AppModule - that is why we use
  BrowserModule only in APpModule and CommonModule for all feature modules.*/
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule,
    // StoreModule.forFeature() will tell ngrx to inject store globally once this module will be loaded into app
    // so it will work even with lazy loading of the current module. For not lazy loading modules we just set up for root
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffects])
  ]
})
export class RecipesModule { }
