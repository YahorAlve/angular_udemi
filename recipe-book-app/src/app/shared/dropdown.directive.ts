import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {}

  @HostListener('click') openOnClick() {
    this.isOpen = !this.isOpen;
  }
}
