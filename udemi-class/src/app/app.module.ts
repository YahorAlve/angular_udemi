// import on top necessary for typescript it(typescript) should know about where things come from to compile poor js code
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';

// we don't need to add ts - it will be added automatically by CLI
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UserComponent } from './user/user.component';
import { NgstileComponent } from './ngstile/ngstile.component';

// Module is passed to bootstrap as an argument and looks like configuration which angular analizes to start and work with app
// Usually only oine module exist but in big projects could be more then one
@NgModule({
  // Just add new component is not enough - angular won't scan all components in folder. We have to declare all components below
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    NgstileComponent
  ],
  // this one imports it is for angular to know what other modules to import
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  // Here is the array of all components Angular should know when tries to start app(at time angular analyzes index.html file)
  // It aslo might just root components are listed here - which will replace <app-root> in index.html.
  // Other components will be added into app.component.html.
  // So root looks mean component which will accomadate other components inside itself
  bootstrap: [AppComponent]
})
export class AppModule { }
