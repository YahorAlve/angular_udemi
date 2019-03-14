import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Just for restructuring in more convinient way sometimes is recommended have core module with dependencies used only in APP module */
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    // For Dropdowns
    SharedModule,
    // For routs, and we need it to re-export as others use it as well
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
    /* HeaderComponent as it is used in app module as a selector and in such case we need to export it, but we don't need
    to export HomeComponent as it used only in routing and for this porpose they need to be just declared once in any 
    module and that is it. */
  ]
})
export class CoreModule { }
