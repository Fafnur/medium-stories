import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { getTestScheduler } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LayoutEffects } from './layout.effects';
import { LAYOUT_FEATURE_KEY, layoutInitialState, LayoutPartialState, layoutReducer } from './layout.reducer';

describe('LayoutEffects', () => {
  let actions$: Observable<any>;
  let effects: LayoutEffects;
  let scheduler: TestScheduler;
  let store: Store<LayoutPartialState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot(
          { [LAYOUT_FEATURE_KEY]: layoutReducer },
          {
            initialState: { [LAYOUT_FEATURE_KEY]: layoutInitialState },
            runtimeChecks: { strictActionImmutability: false }
          }
        ),
        EffectsModule.forRoot([])
      ],
      providers: [LayoutEffects, DataPersistence, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(LayoutEffects);
    store = TestBed.get(Store);
    scheduler = getTestScheduler();
    const duration = scheduler.createTime('-|');
    effects.setRetryStrategyOptions({
      maxRetryAttempts: 3,
      scalingDuration: duration,
      scheduler
    });
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });
});
