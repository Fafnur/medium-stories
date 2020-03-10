import { MultiplyService } from './multiply.service';
import { PrettifyService } from './prettify.service';

describe('PrettifyFakeObjectService', () => {
  let service: PrettifyService;
  const fakeService = { calc: (a, b) => a * b } as MultiplyService;

  beforeEach(() => {
    service = new PrettifyService(fakeService);
  });

  it('calc() should return 12', () => {
    expect(service.calc(3, 4, '', '')).toBe('12');
  });
});
