import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { Debounce } from '@medium-stories/common';
import { AbstractEffects } from '@medium-stories/store';

import { ResponsiveService } from '../interfaces/responsive-service.interface';
import {
  InitiatingWindowProps,
  InitWindowProps,
  ResponsiveActionTypes,
  SetWindowProps,
  WindowPropsInitCanceled,
  WindowPropsInitError,
  WindowPropsInitialized
} from './responsive.actions';
import { RESPONSIVE_FEATURE_KEY, ResponsivePartialState, ResponsiveState } from './responsive.reducer';

@Injectable()
export class ResponsiveEffects extends AbstractEffects<ResponsiveState> {
  @Effect() init$ = this.dataPersistence.fetch(ResponsiveActionTypes.InitWindowProps, {
    run: (action: InitWindowProps, store: ResponsivePartialState) => {
      return !this.getState(store).initiating || action.payload ? new InitiatingWindowProps() : new WindowPropsInitCanceled();
    },
    onError: (action: InitWindowProps, error) => console.error(error.toString())
  });

  @Effect() initiating$ = this.dataPersistence.fetch(ResponsiveActionTypes.InitiatingWindowProps, {
    run: (action: InitiatingWindowProps, store: ResponsivePartialState) => {
      if (isPlatformBrowser(this.platformId)) {
        this.eventManager.addGlobalEventListener('window', 'resize', event => this.windowResizeHandler(event));
      }

      return new WindowPropsInitialized(this.responsiveService.getResponsiveProperties());
    },
    onError: (action: InitiatingWindowProps, error) => new WindowPropsInitError(error.toString())
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ResponsivePartialState>,
    private eventManager: EventManager,
    private responsiveService: ResponsiveService,
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    super(RESPONSIVE_FEATURE_KEY);
  }

  @Debounce(100)
  windowResizeHandler(event: any): void {
    const window = event.target as Window;
    const props = this.responsiveService.getChangesByProperties({
      height: window.innerHeight,
      width: window.innerWidth
    });
    this.dataPersistence.store.dispatch(new SetWindowProps(props));
  }
}
