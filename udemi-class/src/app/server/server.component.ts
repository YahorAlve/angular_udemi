import { Component } from '@angular/core';

// export so it could be used in deferent components
// This class gonna be used like blueprint to create angular objects
@Component({
  // here is metadata which tells angular how to use this class
  // selector name should be uniuqe
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  // We can just assign values w/o tipe
  serverId = 10;
  serverStatus = 'Offline';

  // but also can use typescript feature to assign specific types
  // serverId: number = 10;
  // serverStatus: string = 'Offline';

  // same as java called only once by creation of component - each selector created in html is standalone component
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
