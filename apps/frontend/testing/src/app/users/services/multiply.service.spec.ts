import { MultiplyService } from './multiply.service';

describe('MultiplyService', () => {
  let service: MultiplyService;

  beforeEach(() => {
    service = new MultiplyService();
  });

  it('calc() should return 0', () => {
    expect(service.calc(0, 100)).toBe(0);
  });

  it('calc() should return 1', () => {
    expect(service.calc(1, 1)).toBe(1);
  });

  it('calc() should return 25', () => {
    expect(service.calc(1, 25)).toBe(25);
  });

  it('calc() should return 6', () => {
    expect(service.calc(2, 3)).toBe(6);
    expect(service.calc(3, 2)).toBe(6);
  });
});
