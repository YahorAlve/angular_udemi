import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

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
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mousehooverLeave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}