export interface Locale<T = string> {
  [key: string]: T;

  /**
   * English
   */
  en: T;

  /**
   * Russian
   */
  ru: T;
}
