import { Injectable } from '@angular/core';

import { CookieStorage } from '@medium-stories/storage';

import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { ResponsiveProperties } from '../interfaces/responsive.interface';

/**
 * Keys for storage
 */
export const RESPONSIVE_STORAGE_KEYS = {
  height: 'msthght',
  mobile: 'mstmbl',
  responsiveType: 'mstrspt',
  width: 'mstwdth'
};

@Injectable()
export class BaseResponsiveStorage implements ResponsiveStorage {
  readonly defaultProperties: ResponsiveProperties = { height: 0, mobile: false, width: 0 };

  constructor(protected storage: CookieStorage) {}

  getProperties(): ResponsiveProperties {
    const props = { ...this.defaultProperties };
    const height = this.storage.getItem(RESPONSIVE_STORAGE_KEYS.height);
    if (!Number.isNaN(+height)) {
      props.height = +height;
    }
    const width = this.storage.getItem(RESPONSIVE_STORAGE_KEYS.width);
    if (!Number.isNaN(+width)) {
      props.width = +width;
    }
    const mobile = this.storage.getItem(RESPONSIVE_STORAGE_KEYS.mobile);
    props.mobile = mobile === 'true';

    return props;
  }

  removeProperties(): void {
    for (const key of Object.values(RESPONSIVE_STORAGE_KEYS)) {
      this.storage.removeItem(key);
    }
  }

  setProperties(properties: Partial<ResponsiveProperties>): void {
    for (const key of Object.keys(RESPONSIVE_STORAGE_KEYS)) {
      if (key in properties) {
        this.storage.setItem(RESPONSIVE_STORAGE_KEYS[key], properties[key].toString());
      }
    }
  }
}
