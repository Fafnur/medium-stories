/**
 * Promo carousel slide
 */
export interface PromoCarouselSlide {
  [key: string]: any;

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
export interface PromoCarouselOptions {
  [key: string]: any;

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

  /**
   * Show indicators
   */
  indicators: boolean;

  /**
   * Scroll anchor
   */
  scrollAnchor?: string;
}
