import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {}

  @HostListener('click') openOnClick() {
    if (this.isOpen) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
      this.isOpen = true;
    }
  }
}
