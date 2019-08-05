import { async, TestBed } from '@angular/core/testing';

import { TranslationService } from '../interfaces/translation-service.interface';
import { BaseTranslationService } from './base-translation.service';

describe('BaseTranslationService', () => {
  let service: TranslationService;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslationService,
          useClass: BaseTranslationService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(TranslationService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
