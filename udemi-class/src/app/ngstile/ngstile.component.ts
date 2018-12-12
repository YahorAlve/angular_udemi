import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstile',
  templateUrl: './ngstile.component.html',
  styleUrls: ['./ngstile.component.css']
})
export class NgstileComponent implements OnInit {

  displayText = false;
  increment = 0;
  items = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.displayText = !this.displayText;
    this.increment++;
    this.items.push(this.increment);
  }

  getColor() {
    return ;
  }
}
