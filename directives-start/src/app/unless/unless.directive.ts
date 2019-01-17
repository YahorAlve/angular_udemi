import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  /* If we keep this property name as "unless() {}" and do not change it to appUnless it first will throw an error that angular can't find
     any property to bind with (Make sure that the property name is spelled correctly). It happens because when angular see structural
     directive it creates ng-template with binding to property [appUnless] and can't find it. So we need to introduce exact the same name 
     as selector name "appUnless".
  */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
    } else {
        // to remove this view from DOM
        this.vcRef.clear();
    }
  }

  // teplate is what we need to render and view is where we should do it
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
