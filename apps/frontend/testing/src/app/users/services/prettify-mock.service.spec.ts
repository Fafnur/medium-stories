import { MultiplyService } from './multiply.service';
import { PrettifyService } from './prettify.service';

jest.mock('./multiply.service', () => ({
  MultiplyService: function() {
    return {
      calc: jest.fn((a, b) => a * b)
    };
  }
}));

describe('PrettifyMockService', () => {
  let service: PrettifyService;

  beforeEach(() => {
    service = new PrettifyService(new MultiplyService());
  });

  it('calc() should return 12', () => {
    expect(service.calc(3, 4, '', '')).toBe('12');
  });
});
