import { async, TestBed } from '@angular/core/testing';

import { TranslationCommonModule } from './translation-common.module';

describe('TranslationCommonModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [TranslationCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TranslationCommonModule).toBeTruthy();
  });
});
