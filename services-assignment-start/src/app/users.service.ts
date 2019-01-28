import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({providedIn: 'root'})
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  onSetToActive(id: number, user: string) {
    this.inactiveUsers.splice(id, 1);
    this.activeUsers.push(user);
    this.counterService.incrementInactiveToActive();
  }

  onSetToInactive(id: number, user: string) {
    this.activeUsers.splice(id, 1);
    this.inactiveUsers.push(user);
    this.counterService.incrementActiveToInactive();
  }

}
