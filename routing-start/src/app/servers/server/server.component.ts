import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // we need to put + to convert value to number as it was used to get server by id
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit() {
    // queryParamsHandling: 'merge' will merge old and new params
    // queryParamsHandling: 'preserve' will preserve old ones, but in case we have new ones and use preserve old ones will override new ones
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
