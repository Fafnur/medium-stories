/**
 * Promo carousel slide
 */
import { Dictionary } from '@medium-stories/common';

export interface PromoCarouselSlide {
  /**
   * Path to image
   */
  src: string;

  /**
   * Slide title
   */
  title: string;

  /**
   * Slide description
   */
  description?: string;

  /**
   * Slide route
   */
  route?: string;
}

/**
 * Promo carousel options
 */
export interface PromoCarouselOptions extends Dictionary<any> {
  /**
   * Promo carousel slides
   */
  slides: PromoCarouselSlide[];

  /**
   * Is active slider
   */
  active: number;

  /**
   * Is hide slider
   */
  hide: number | null;

  /**
   * Change interval
   */
  interval: number;
}
