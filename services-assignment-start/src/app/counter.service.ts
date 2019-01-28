import { Injectable } from '@angular/core';

/* Using this new syntax is completely optional, the traditional syntax (using providers[] ) will still work.
 The "new syntax" does offer one advantage though: Services can be loaded lazily by Angular (behind the scenes)
  and redundant code can be removed automatically. This can lead to a better performance and loading speed -
  though this really only kicks in for bigger services and apps in general. */
@Injectable({providedIn: 'root'})
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
