import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {

  constructor(private serviceService: ServersService) { }

  // Unlike component this service will run each time we re-route page and Snapshot is enough to ectract data
  // we don't need to subscribe to this event as we are doing in component
  // this we load our data in advance before rendering (or asynch while loading)
  // Note: Other way to fill out with dynamic data exact like we did before in component in ngOnInit()
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
      return this.serviceService.getServer(+route.params['id']);
  }
}
