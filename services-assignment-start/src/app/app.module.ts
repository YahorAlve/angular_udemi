import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './users.service';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // since angular 6 we can declare providers differenly if we want them(same instance) available through out the application
  // @Injectable({providedIn: 'root'}) we need to place above service name
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
