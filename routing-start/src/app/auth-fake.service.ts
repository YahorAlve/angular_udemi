import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthFakeService {

  constructor() { }

  loggedIn = false;

  isAuthentificated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}
