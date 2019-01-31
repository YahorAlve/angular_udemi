import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  ngOnInit() {
    this.user = {
        id: this.route.snapshot.params['id'],
        name: this.route.snapshot.params['name']
    };
  }

}
