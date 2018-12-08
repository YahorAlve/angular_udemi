import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  isUserNameEmpty(): boolean {
    return this.isEmpty(this.userName);
  }

  isEmpty(str) {
    return (!str || 0 === str.length);
  }

  resetUserName() {
    this.userName = '';
  }

}
