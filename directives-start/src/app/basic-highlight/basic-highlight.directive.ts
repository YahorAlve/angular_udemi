import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  // Angular uses constructor for injection, here it is injecting refering class to an element where directive was placed on
  // Just reminding private is placed as a short cut - it will make elementRef class variable available for any method in the class
  constructor(private elementRef: ElementRef) {}

  // That is not the best way to change styles through direct access to native element but just for example was implemented here
  // for some reason onInit is better place to make an operations on element where directive was placed on
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
