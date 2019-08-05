import { async, TestBed } from '@angular/core/testing';

import { BrowserTranslateLoader } from './browser-translate.loader';

describe('BrowserTranslateLoader', () => {
  let loader: BrowserTranslateLoader;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [BrowserTranslateLoader]
    }).compileComponents();
  }));

  beforeEach(() => {
    loader = TestBed.get(BrowserTranslateLoader);
  });

  it('should create', () => {
    expect(loader).toBeTruthy();
  });
});
