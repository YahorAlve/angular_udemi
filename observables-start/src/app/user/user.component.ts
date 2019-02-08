import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { serializePath } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    /* This is an observer (subscriber) and observable is params Data source and it has anonymus function subscribe which
       accepts functions as parametrs. And it can accept 3 function : 1 one for working with data comes back, second
       for work with an error (error handeling), third one is completion of observable (e.g. http request observable) */
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  /* As it was mentioned Subject is obsever and observable at the same time and here we are using part of observable
  which is genrating some action, and in app module we will use observer part of Subject. In other words it is just another
  way to create own observable and looks very similar to EvntEmitter which is actially build on Subject. */
  /* Mentor advised that it is a good alternative to EventEmitter and better use the Subject than event listener. */
  onActivate() {
    this.service.userActivated.next(this.id);
  }

}
