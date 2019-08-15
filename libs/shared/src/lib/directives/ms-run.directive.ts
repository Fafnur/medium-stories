import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgLetContext } from './ms-let.directive';

@Directive({
  selector: '[msRun]'
})
export class MsRunDirective implements OnInit {
  context: NgLetContext = {
    $implicit: null
  };

  @Input() set msRun(value: any) {
    this.context.$implicit = value;
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
