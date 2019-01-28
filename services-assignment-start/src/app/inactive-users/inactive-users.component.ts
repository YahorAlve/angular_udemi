import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor(private usersService: UsersService) {}

  users: string[];

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number, user: string) {
    this.usersService.onSetToActive(id, user);
  }

}
