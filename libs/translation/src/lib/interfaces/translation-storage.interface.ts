/**
 * Translation storage interface
 */
export abstract class TranslationStorage<T = string> {
  /**
   * Return language from storage
   */
  abstract getLanguage(): T | null;

  /**
   * Remove language from storage
   */
  abstract removeLanguage(): void;

  /**
   * Set language to storage
   */
  abstract setLanguage(language: T): void;
}
