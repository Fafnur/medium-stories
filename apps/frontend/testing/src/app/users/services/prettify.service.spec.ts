import { MultiplyService } from './multiply.service';
import { PrettifyService } from './prettify.service';

describe('PrettifyService', () => {
  let service: PrettifyService;

  beforeEach(() => {
    service = new PrettifyService(new MultiplyService());
  });

  it('calc() should return 6', () => {
    expect(service.calc(3, 3, '', '')).toBe('9');
  });
});
