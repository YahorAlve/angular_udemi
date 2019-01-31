import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// this rxjs it is a third party library angular use for observables
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

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
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  /* By default angular will destroy any subscription for component when we leave the component (during onDestroy phase)
     And this is great cause if it doesnt it would lead to issues as aobservables would try to call some code for components
     which doesn't exist anymore - leaks. But just if we want to do it by ourself (e.g. we created our own observable angular 
    is not aware of) here is an example.
  */
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
