import { Component, OnInit } from '@angular/core';

@Component({
  // we can use selectors as an atributes - in that case we need to put it as array
  // selector: '[app-servers]', - attribute value
  selector: 'app-servers', // - selector
  // selector: '.app-servers', - through class
  // whether templateUrl or template must be presented in declaration. Each component must have template
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  /* template: `
    <app-server></app-server>
    <app-server></app-server>
  `, */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addNewServerAllowed = false;

  // constructor is method executed at time of component created by the angular
  constructor() {
    // setTimeout - regular javascript function
    // since ES6 instead of function() {} we can type () => {}. And note this will now work in function() sintacsis
    setTimeout(() => {
      this.addNewServerAllowed = true;
    },
      10000);
  }

  ngOnInit() {
  }

}
