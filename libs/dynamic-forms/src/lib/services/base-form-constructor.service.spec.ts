import { async, TestBed } from '@angular/core/testing';

import { FormConstructor } from '../interfaces/form-constructor.interface';
import { BaseFormConstructor } from './base-form-constructor.service';

describe('BaseFormConstructor', () => {
  let service: FormConstructor;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: FormConstructor,
          useClass: BaseFormConstructor
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(FormConstructor);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
