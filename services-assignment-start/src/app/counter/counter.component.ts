import { Component, OnInit, DoCheck } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, DoCheck {

  constructor(private counterService: CounterService) { }

  private activeInactive: number;
  private inactiveActive: number;

  // It didn't work because looks number is premetive type and we just assigned value 0 to our varibale and it doesn't
  // point to Integer object and doesn't know when it is changed in counterService so stays 0 forewer
  // We could've just used obejct in counterService and counterComponent instead of number to force it takes updates
  // But just for playing arround i implenented onDoCheck lifeHook to see how it works - where i just assign new number 
  // values from counterServices to component variables
  ngOnInit(): void {
    this.activeInactive = this.counterService.activeToInactive;
    this.inactiveActive = this.counterService.inactiveToActive;
  }

  ngDoCheck(): void {
    this.activeInactive = this.counterService.activeToInactive;
    this.inactiveActive = this.counterService.inactiveToActive;
  }

}
