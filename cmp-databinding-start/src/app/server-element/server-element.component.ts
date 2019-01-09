import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None - will aply component CSS file globaly to all elements even though they have angular attributes
  // Emulated is default
  // Native will be behaviour like for emulated but only for browsers which support it
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { name: string; type: string; content: string };
  @Input() elementName: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    // if we call header.text before ngAfterViewInit no text will be presented as at this moment no view of component
    // was initialized and as result no text is in HTML element yet.
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked.
    // Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called');
  }

  /* Will be executed after ng-content was projected (<ng-content></ng-content>). It is called only once and ngAfterContentChecked is
  called many times - each time change detector launced on ng-content*/
  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit called');
    // But if we call it here it will have value as View of Component was just initialized
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy called');
  }
}
