import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Directive, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResponsiveFacade } from '../+state/responsive.facade';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';

@Directive({
  selector: '[msMobile]'
})
export class MsMobileDirective implements OnInit, OnDestroy {
  /**
   * Subscription
   */
  private subscription: Subscription;

  /**
   * Inverse logic (is not mobile)
   */
  private inverse = false;

  @Input() set msMobile(value: boolean) {
    this.inverse = typeof value === 'boolean' ? !value : false;
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private responsiveFacade: ResponsiveFacade,
    private responsiveStorage: ResponsiveStorage,
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.subscription = this.responsiveFacade.mobile$.subscribe(mobile => {
        this.updateView(mobile);
      });
    } else {
      const props = this.responsiveStorage.getProperties();
      this.updateView(props.mobile);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Update view
   * @param mobile Is mobile
   */
  private updateView(mobile: boolean): void {
    if (!this.inverse ? mobile : !mobile) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    this.changeDetectorRef.detectChanges();
  }
}
