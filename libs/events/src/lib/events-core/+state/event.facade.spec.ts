import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { EventEffects } from './event.effects';
import { EventFacade } from './event.facade';

import { eventQuery } from './event.selectors';
import { LoadEvent, EventLoaded } from './event.actions';
import { EventState, Entity, eventInitialState, eventReducer } from './event.reducer';

interface TestSchema {
  event: EventState;
}

describe('EventFacade', () => {
  let facade: EventFacade;
  let store: Store<TestSchema>;
  let createEvent;

  beforeEach(() => {
    createEvent = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('event', eventReducer, { initialState: eventInitialState }),
          EffectsModule.forFeature([EventEffects])
        ],
        providers: [EventFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(EventFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allEvent$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allEvent$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `EventLoaded` to manually submit list for state management
     */
    it('allEvent$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allEvent$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new EventLoaded([createEvent('AAA'), createEvent('BBB')]));

        list = await readFirst(facade.allEvent$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
