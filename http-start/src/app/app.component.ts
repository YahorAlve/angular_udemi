import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private service: ServiceService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  /* Here when we will subscribe to event http request will be executed in observable mode */
  onSave() {
    this.service.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onGet() {
    this.service.getServers()
      .subscribe(
        (servers: any[]) => {
          console.log(servers);
        },
        /* Here we proccessing catch Observable.throw(). Also we still will see error in browser console for http as it is 
        ajax browser stuff but everething below would be processed by our code.*/
        (error) => console.log(error)
      );
  }

}
