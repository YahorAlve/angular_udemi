import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  /* HTTP is builtin angular http service. That is why here we need
  to put injectable anotation so we can inject other service into this service */
  constructor(private http: Http) { }

  /* Behind the scene Angular http service is using observable and will not send erequest unless we subscribe to event.
  So just create object observable but no http request was sent yet as noone listen to it no point in sending it.*/
  storeServers(servers: any[]) {
    return this.http.post('https://angular-http-practice-e64b5.firebaseio.com/data.json', servers);
  }
}
