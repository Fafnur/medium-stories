import { async, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  let pipe: CamelCasePipe;
  let translateService: TranslateService;
  const locale = 'en';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        CamelCasePipe,
        {
          provide: TranslateService,
          useValue: {
            addLangs: jest.fn(),
            use: jest.fn(),
            currentLang: locale
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    pipe = TestBed.get(CamelCasePipe);
    translateService = TestBed.get(TranslateService);
  });

  it('should create', () => {
    expect(pipe).toBeDefined();
  });

  it('should return current value', () => {
    const val = 'Mask error';
    expect(pipe.transform(val)).toBe('maskError');
  });
});
