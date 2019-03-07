import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

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
    const myHeaders = new Headers({'Content-Type': 'application/json'});
    /* return this.http.post('https://angular-http-practice-e64b5.firebaseio.com/data.json',
    servers,
    {headers: myHeaders}); */
    return this.http.put('https://angular-http-practice-e64b5.firebaseio.com/data.json',
    servers,
    {headers: myHeaders});
  }

  /* Map will create another wrapper observable which will be returned and in between first observable for http and this new one
   will transform response to data */
  getServers() {
    return this.http.get('https://angular-http-practice-e64b5.firebaseio.com/data.json')
                  .map(
                      (response: Response) => {
                        const data = response.json();
                        for (const server of data) {
                          server.name = 'FETCHED_' + server.name;
                        }
                        return data;
                      }
                  );
  }
}
