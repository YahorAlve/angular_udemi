import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  activeToInactive = 0;
  inactiveToActive = 0;

  incrementInactiveToActive() {
    this.inactiveToActive ++;
    console.log(this.inactiveToActive);
  }

  incrementActiveToInactive() {
    this.activeToInactive ++;
    console.log(this.activeToInactive);
  }

}
