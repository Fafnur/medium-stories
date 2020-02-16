import { async, TestBed } from '@angular/core/testing';

import { TranslationModule } from './translation.module';

describe('TranslationModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [TranslationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TranslationModule).toBeTruthy();
  });
});
