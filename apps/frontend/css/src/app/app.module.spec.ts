import { TestBed, async } from '@angular/core/testing';

import { AppModule } from './app.module';

describe('AppModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppModule).toBeTruthy();
  });
});
