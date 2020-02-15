import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { cold, getTestScheduler, hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { responsiveErrorStub, responsivePropertiesStub } from '../../testing';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { fromResponsiveActions } from './responsive.actions';
import { ResponsiveEffects } from './responsive.effects';
import { RESPONSIVE_FEATURE_KEY, responsiveInitialState, ResponsivePartialState, responsiveReducer } from './responsive.reducer';

describe('ResponsiveEffects', () => {
  let actions$: Observable<any>;
  let effects: ResponsiveEffects;
  let service: ResponsiveService;
  let scheduler: TestScheduler;
  let store: Store<ResponsivePartialState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot(
          { [RESPONSIVE_FEATURE_KEY]: responsiveReducer },
          {
            initialState: { [RESPONSIVE_FEATURE_KEY]: responsiveInitialState },
            runtimeChecks: { strictActionImmutability: false }
          }
        ),
        EffectsModule.forRoot([])
      ],
      providers: [
        ResponsiveEffects,
        DataPersistence,
        provideMockActions(() => actions$),
        {
          provide: ResponsiveService,
          useValue: {
            getInitialProperties: jest.fn()
          }
        }
      ]
    });

    store = TestBed.inject(Store);
    effects = TestBed.inject(ResponsiveEffects);
    scheduler = getTestScheduler();
    const duration = scheduler.createTime('-|');
    effects.setRetryStrategyOptions({
      maxRetryAttempts: 3,
      scalingDuration: duration,
      scheduler
    });
    service = TestBed.inject(ResponsiveService);
  });

  describe('init$', () => {
    it('should return initiating responsive', () => {
      const action = new fromResponsiveActions.InitWindowProps();
      const completion = new fromResponsiveActions.InitiatingWindowProps();

      actions$ = hot('^-a--', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.init$).toBeObservable(expected);
    });

    it('should return responsive init canceled', () => {
      store.dispatch(new fromResponsiveActions.InitiatingWindowProps());
      const action = new fromResponsiveActions.InitWindowProps();
      const completion = new fromResponsiveActions.WindowPropsInitCanceled();

      actions$ = hot('^-a--', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('initiating$', () => {
    it('should return responsive initialized', () => {
      const action = new fromResponsiveActions.InitiatingWindowProps();
      const completion = new fromResponsiveActions.WindowPropsInitialized(responsivePropertiesStub);

      actions$ = hot('^-a--', { a: action });
      const expected = cold('--b', { b: completion });
      service.getResponsiveProperties = jest.fn(() => responsivePropertiesStub);

      expect(effects.initiating$).toBeObservable(expected);
    });

    it('should return responsive init error', () => {
      const action = new fromResponsiveActions.InitiatingWindowProps();
      const completion = new fromResponsiveActions.WindowPropsInitError(`Error: ${responsiveErrorStub}`);

      actions$ = hot('^-a---', { a: action });
      const response = cold('-#|', {}, responsiveErrorStub);
      const expected = cold('--b', { b: completion });
      service.getResponsiveProperties = jest.fn(() => {
        throw new Error(responsiveErrorStub);
      });

      expect(effects.initiating$).toBeObservable(expected);
    });
  });
});
