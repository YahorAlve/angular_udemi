import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // another easier way in case we need to change only e.g. property value
  // as parametr is property on elment we are changing - camel case is important as this is property in dom and it doesn't recognize dashes
  @HostBinding('style.backgroundColor')  backgroundColor  = 'transparent';

  // here we inject in Directive (BetterHighlightDirective) 2 classes (objects),
  // one is element where directive was put on and render service
  constructor(private elementRef: ElementRef , private renderer: Renderer2) { }

 /*
    That is better approach to render elments cuase sometimes angular code can work not in browser and won't have direct access to dom
    so this rendere will manage it. WE should use the Renderer for any DOM manipulations.
  */
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  // mouseenter is name of event supported by dom, we still can use old approach described before (event)="method($event)"
  @HostListener('mouseenter') mousehoover(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mousehooverLeave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
