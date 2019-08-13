import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { ResponsiveProperties } from '../interfaces/responsive.interface';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { fromResponsiveActions } from './responsive.actions';
import { ResponsivePartialState } from './responsive.reducer';
import { responsiveQuery } from './responsive.selectors';

@Injectable()
export class ResponsiveFacade {
  /**
   * Observed height
   */
  height$ = this.store.pipe(select(responsiveQuery.getHeight));

  /**
   * Observed initialized
   */
  initialized$ = this.store.pipe(select(responsiveQuery.getInitialized));

  /**
   * Observed has mobile
   */
  mobile$ = this.store.pipe(select(responsiveQuery.getMobile));

  /**
   * Observed properties
   */
  props$ = this.store.pipe(select(responsiveQuery.getProperties));

  /**
   * Observed responsive type
   */
  responsiveType$ = this.store.pipe(select(responsiveQuery.getResponsiveType));

  /**
   * Observed width
   */
  width$ = this.store.pipe(select(responsiveQuery.getWidth));

  constructor(private store: Store<ResponsivePartialState>, private responsiveService: ResponsiveService) {}

  /**
   * Init responsive
   * @param payload Force
   */
  init(payload?: boolean): void {
    this.store.dispatch(new fromResponsiveActions.InitWindowProps(payload));
  }

  /**
   * Set window properties
   * @param props Window properties
   */
  setProps(props: Partial<ResponsiveProperties>): void {
    const payload = this.responsiveService.getChangesByProperties(props);

    this.store.dispatch(new fromResponsiveActions.SetWindowProps(payload));
  }
}
