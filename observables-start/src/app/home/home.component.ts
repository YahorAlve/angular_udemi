import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(2000);
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    /* Creating new Observable which will fire in 1 and fail in 2 and complete in 3. Create accept function as an argument
     which is supposed to be our asynch code.*/
     /* This observer is just used to build up observable to genreate data packages and is not the same as observer (subscriber) outside */
    const myObservable = Observable.create((observer: Observer<string>) => {
        setTimeout( () => {
          observer.next('First Value');
        }, 1000);
        setTimeout( () => {
          // observer.error('Error Value');
        }, 2000);
        setTimeout( () => {
          observer.complete();
        }, 3000);
        setTimeout( () => {
          observer.next('Last Value - wont be fired as observer will be completed');
        }, 4000);
      });
      /* 3 functions : 1 for data, second for error, 3rd for complete event processing. If there was an error
      our observer won;t catch completed event. So one onle coudl be whether Completed or Error. */
      this.customSubscription = myObservable.subscribe(
        (data: string) => { console.log(data); },
        (error: string) => { console.log(error); },
        () => { console.log('Completed'); }
      );
  }

  /* To avoid memory leaks we must unsubscribe from custom observables when we leave the component on the screen
  - means on destroy will be called. No need to unsubscribe from angular observables but just to be consistent we can */
  ngOnDestroy(): void {
    this.numbersSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
