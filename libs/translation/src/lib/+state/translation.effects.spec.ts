import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TranslationEffects } from './translation.effects';
import { LoadTranslation, TranslationLoaded } from './translation.actions';

describe('TranslationEffects', () => {
  let actions: Observable<any>;
  let effects: TranslationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [TranslationEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(TranslationEffects);
  });

  describe('loadTranslation$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadTranslation() });
      expect(effects.loadTranslation$).toBeObservable(hot('-a-|', { a: new TranslationLoaded([]) }));
    });
  });
});
