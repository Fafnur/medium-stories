import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface MsLetContext {
  [p: string]: any;

  $implicit: any;
}

@Directive({
  selector: '[msLet]'
})
export class MsLetDirective implements OnInit {
  context: MsLetContext = {
    $implicit: null
  };

  @Input() set msLetOf(value: any) {
    this.context.$implicit = value;
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }
}
