import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
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
