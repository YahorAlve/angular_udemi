import { Component, OnInit } from '@angular/core';

@Component({
  // we can use selectors as an atributes - in that case we need to put it as array
  // selector: '[app-servers]', - attribute value
  selector: 'app-servers', // - selector
  // selector: '.app-servers', - through class
  // whether templateUrl or template must be presented in declaration. Each component must have template
  // templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
