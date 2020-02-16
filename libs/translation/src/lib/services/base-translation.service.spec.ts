import { async, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TRANSLATION_CONFIG, TranslationService } from '../interfaces/translation-service.interface';
import { TranslationStorage } from '../interfaces/translation-storage.interface';
import { TRANSLATION_CONFIG_DEFAULT } from '../translation.common';
import { BaseTranslationService } from './base-translation.service';

describe('BaseTranslationService', () => {
  let service: TranslationService;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        {
          provide: TranslationService,
          useClass: BaseTranslationService
        },
        {
          provide: TranslationStorage,
          useValue: {
            getLanguage: jest.fn(),
            setLanguage: jest.fn()
          }
        },
        {
          provide: TRANSLATION_CONFIG,
          useValue: TRANSLATION_CONFIG_DEFAULT
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(TranslationService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
