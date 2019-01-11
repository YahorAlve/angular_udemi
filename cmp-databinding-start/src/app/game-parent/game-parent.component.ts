import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-parent',
  templateUrl: './game-parent.component.html',
  styleUrls: ['./game-parent.component.css']
})
export class GameParentComponent implements OnInit {

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  checkNumber(number: number) {
    console.log(number);
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }

}
