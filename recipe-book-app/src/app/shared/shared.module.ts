import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  /* Every Directive, Component or Pipe must be declared at least once and only once in any module, it makes them available for
  using in module it was declared. But it doesn't make them avaliable to other moduels. To make them we need to export them.  */
  declarations: [
    DropdownDirective
  ],
  /* And also to export any module we even don;t need to import it. Like here CommonModule. Important that we can export CommonModule
  to other modules and also import ComonModule(or BrowserModule) in these other modules as well - the Module we import directly in some
  specific module will override imported from export of other module. E.g in our app AppModule will utilize BrowserModule instead of 
  CommonModule exported through this imported SharedModule to AppModule. */
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule { }
