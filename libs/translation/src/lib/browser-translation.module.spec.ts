import { async, TestBed } from '@angular/core/testing';

import { BrowserTranslationModule } from './browser-translation.module';

describe('BrowserTranslationModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [BrowserTranslationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BrowserTranslationModule).toBeTruthy();
  });
});
