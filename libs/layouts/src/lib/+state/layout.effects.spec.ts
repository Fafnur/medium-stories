import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { LayoutEffects } from './layout.effects';
import { LoadLayout, LayoutLoaded } from './layout.actions';

describe('LayoutEffects', () => {
  let actions: Observable<any>;
  let effects: LayoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [LayoutEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(LayoutEffects);
  });

  describe('loadLayout$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadLayout() });
      expect(effects.loadLayout$).toBeObservable(hot('-a-|', { a: new LayoutLoaded([]) }));
    });
  });
});
