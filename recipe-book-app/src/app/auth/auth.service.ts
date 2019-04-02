import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  // We can't use reducer with async funtions - changing state is sync operation, but we can call it in then of firebase function
  // as it will be executed when it has done already
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
          user => {
            this.store.dispatch(new AuthActions.SignUp());
            firebase.auth().currentUser.getIdToken()
              .then(
                (token: string) => {
                  console.log(this.token);
                  this.store.dispatch(new AuthActions.SetToken(token));
                }
              );
          }
        )
        .catch(
          error => console.log(error)
        );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
          response => {
            this.store.dispatch(new AuthActions.SignIn());
            this.router.navigate(['/']);
            /*So one of ways to solve token issue is call token set up while doing login and re-setup in when doing getTokenId
            It looks it is still not gurantee that token id will be set up imidiatly but not long time (call to firebase)
            after successful login.*/
            firebase.auth().currentUser.getIdToken()
              .then(
                (token: string) => {
                  console.log(this.token);
                  this.store.dispatch(new AuthActions.SetToken(token));
                }
              );
          }
        )
        .catch(
          error => console.log(error)
        );
  }

  /* Here firebase is async call as it is automatically will try to connect firebase to check if the current user token 
  is valid yet. SO the call will go and eventially update new token but we won;t wait and return token already set up
  before during signing in phase and it could lead to auth error when token expired - :) that looks like front end
  guys style - very unreliable */
  getTokenId() {
    firebase.auth().currentUser.getIdToken()
      .then(
        token => {
          this.token = token;
        }
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
  }
}
