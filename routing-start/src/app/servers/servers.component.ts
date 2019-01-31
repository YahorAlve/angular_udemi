import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    /* Unlike routerLink navigate by default doesn't know which url now is openned so relative and absolute path
       will be working the same cause by default it will work like ralative to base url. It just doesn't know what
       is current address. But we can provide json like belowe which will tell angular where we are located and it
       will use like a new base for bulding complete path.
       ActivatedRoute is just JS object which keeps a lot meta information routes. Current code will try again build
       localhost:4200/servers/servers cause 'servers' will get relativeTo activated route localhost:4200/servers
    */
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
