import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  /* This ActivatedRoute will have access to current route and will map all pathes to dynamic urls like for :id will
     use everething after /users, for name everything for :name after users/something/ */
  /* Observable it is third party library (not angular) which allows us easyly to work with asynchronious tasks, it will
     execute our peace of code when some specific event happens - so we don't need to block our application from work.
     Code will be executed whenever new params will be sent from observables. Observables it is the same as callback*/
  /* If we know that our component will be always reached form outside and as result will be reloaded each time
     we can just use snapshot.params, in all other cases we need to subscribe to params update to be safe.
  */
  ngOnInit() {
    this.user = {
        id: this.route.snapshot.params['id'],
        name: this.route.snapshot.params['name']
    };
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

}
