import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  /*
  When we add service at AppModule level it (same instance) gets available for each place in angular app - even for other services
  It is not posible (injection the service into other services) when we declare provider in AppComponent or any other component
  */
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
