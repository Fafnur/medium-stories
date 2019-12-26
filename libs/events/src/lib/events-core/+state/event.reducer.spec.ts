import { EventLoaded } from './event.actions';
import { EventState, Entity, eventInitialState, eventReducer } from './event.reducer';

describe('Event Reducer', () => {
  const getEventId = it => it['id'];
  let createEvent;

  beforeEach(() => {
    createEvent = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Event actions ', () => {
    it('should return set the list of known Event', () => {
      const events = [createEvent('PRODUCT-AAA'), createEvent('PRODUCT-zzz')];
      const action = new EventLoaded(events);
      const result: EventState = eventReducer(eventInitialState, action);
      const selId: string = getEventId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = eventReducer(eventInitialState, action);

      expect(result).toBe(eventInitialState);
    });
  });
});
