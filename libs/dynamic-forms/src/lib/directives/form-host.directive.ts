import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[msFormHost]'
})
export class FormHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
