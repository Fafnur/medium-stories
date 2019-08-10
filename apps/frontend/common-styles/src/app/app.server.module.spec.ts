import { async, TestBed } from '@angular/core/testing';

import { AppServerModule } from './app.server.module';

describe('AppServerModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [AppServerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppServerModule).toBeTruthy();
  });
});
