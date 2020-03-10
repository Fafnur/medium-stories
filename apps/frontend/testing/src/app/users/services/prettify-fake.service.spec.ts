import { MultiplyService } from './multiply.service';
import { PrettifyService } from './prettify.service';

class FakeMultiplyService implements MultiplyService {
  calc(a?: number, b?: number): number {
    return (a ?? 1) * (b ?? 1);
  }
}

describe('PrettifyFakeService', () => {
  let service: PrettifyService;

  beforeEach(() => {
    service = new PrettifyService(new FakeMultiplyService());
  });

  it('calc() should return 6', () => {
    expect(service.calc(6, null, '', '')).toBe('6');
  });
});
