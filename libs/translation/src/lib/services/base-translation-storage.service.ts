import { Injectable } from '@angular/core';

import { CookieStorage } from '@medium-stories/storage';

import { TranslationStorage } from '../interfaces/translation-storage.interface';

/**
 * Keys for storage
 */
export const TRANSLATION_STORAGE_KEYS = {
  language: 'language'
};

@Injectable()
export class BaseTranslationStorage implements TranslationStorage {
  constructor(private storage: CookieStorage) {}

  getLanguage(): string | null {
    return this.storage.getItem(TRANSLATION_STORAGE_KEYS.language) || null;
  }

  removeLanguage(): void {
    this.storage.removeItem(TRANSLATION_STORAGE_KEYS.language);
  }

  setLanguage(language: string): void {
    this.storage.setItem(TRANSLATION_STORAGE_KEYS.language, language);
  }
}
