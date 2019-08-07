import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { Observable } from 'rxjs';

import { RootEffects } from './root.effects';
import { reducers, rootInitialState } from './root.reducer';

describe('RootEffects', () => {
  let actions$: Observable<any>;
  let effects: RootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot(reducers, {
          initialState: rootInitialState,
          runtimeChecks: { strictActionImmutability: false }
        }),
        EffectsModule.forRoot([])
      ],
      providers: [RootEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<RootEffects>(RootEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
