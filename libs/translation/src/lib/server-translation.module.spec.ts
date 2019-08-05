import { async, TestBed } from '@angular/core/testing';

import { ServerTranslationModule } from './server-translation.module';

describe('ServerTranslationModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [ServerTranslationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ServerTranslationModule).toBeTruthy();
  });
});
