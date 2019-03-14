import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const authRouts: Route[] = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRouts)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
