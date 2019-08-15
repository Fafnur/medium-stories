import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface MsRunContext {
  $implicit: any;
}

@Directive({
  selector: '[msRun]'
})
export class MsRunDirective implements OnInit {
  context: MsRunContext = {
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
