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
  serverCreation = 'No Server Was created!';
  serverName = 'TestServer';
  serverCreated = false;

  // constructor is method executed at time of component created by the angular
  constructor() {
    // setTimeout - regular javascript function
    // since ES6 instead of function() {} we can type () => {}. And note this will now work in function() sintacsis
    setTimeout(() => {
      this.addNewServerAllowed = true;
    }, 3000);
  }

  ngOnInit() {}

  onServerCreation() {
    this.serverCreated = true;
    this.serverCreation = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value; // target is html element the event was triggered on
    // sometimes you need to casting of elements and it is done like below
    // (<HTMLInputElement> event.target).value;
  }
}
