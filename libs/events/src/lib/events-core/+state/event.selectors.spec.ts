import { Entity, EventState } from './event.reducer';
import { eventQuery } from './event.selectors';

describe('Event Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEventId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createEvent = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      event: {
        list: [createEvent('PRODUCT-AAA'), createEvent('PRODUCT-BBB'), createEvent('PRODUCT-CCC')],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Event Selectors', () => {
    it('getAllEvent() should return the list of Event', () => {
      const results = eventQuery.getAllEvent(storeState);
      const selId = getEventId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedEvent() should return the selected Entity', () => {
      const result = eventQuery.getSelectedEvent(storeState);
      const selId = getEventId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = eventQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = eventQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
