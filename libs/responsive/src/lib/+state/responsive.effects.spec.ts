import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ResponsiveEffects } from './responsive.effects';
import { LoadResponsive, ResponsiveLoaded } from './responsive.actions';

describe('ResponsiveEffects', () => {
  let actions: Observable<any>;
  let effects: ResponsiveEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [ResponsiveEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(ResponsiveEffects);
  });

  describe('loadResponsive$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadResponsive() });
      expect(effects.loadResponsive$).toBeObservable(hot('-a-|', { a: new ResponsiveLoaded([]) }));
    });
  });
});
