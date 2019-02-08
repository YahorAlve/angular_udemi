import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

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

}
