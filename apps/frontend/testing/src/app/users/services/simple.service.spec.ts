import { SimpleService } from './simple.service';

describe('Simple test', () => {
  let service: SimpleService;

  beforeEach(() => {
    service = new SimpleService();
  });

  it('get() should return 1', () => {
    expect(service.get()).toBe(1);
  });
});
