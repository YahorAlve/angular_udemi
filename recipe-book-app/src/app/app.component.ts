import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB_XTem6o4IQuJAS2dnFysvEMXohFfatjA',
      authDomain: 'ng-recipe-book-udemi.firebaseapp.com'
    });
  }

}
