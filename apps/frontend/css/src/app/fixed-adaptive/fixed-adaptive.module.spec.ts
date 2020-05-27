import { TestBed, async } from '@angular/core/testing';

import { HomeModule } from './home.module';

describe('HomeModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [HomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeModule).toBeTruthy();
  });
});
