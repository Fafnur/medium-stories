import { async, TestBed } from '@angular/core/testing';

import { ServerTranslateLoader } from './server-translate.loader';

describe('ServerTranslateLoader', () => {
  let loader: ServerTranslateLoader;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [ServerTranslateLoader]
    }).compileComponents();
  }));

  beforeEach(() => {
    loader = TestBed.get(ServerTranslateLoader);
  });

  it('should create', () => {
    expect(loader).toBeTruthy();
  });
});
