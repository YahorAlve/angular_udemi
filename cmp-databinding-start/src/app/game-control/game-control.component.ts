import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberGeneratedEvent = new EventEmitter<number>();
  generatedNumber = 0;
  ref: any;

  constructor() { }

  ngOnInit() {
  }

  startTheGame() {
    this.ref = setInterval(this.generateTheValue , 1000);
  }

  generateTheValue = () => {
    this.generatedNumber++;
    this.numberGeneratedEvent.emit(this.generatedNumber);
  }

  pauseTheGame() {
    clearInterval(this.ref);
  }

  stopTheGame() {
    clearInterval(this.ref);
    this.generatedNumber = 0;
  }

}
