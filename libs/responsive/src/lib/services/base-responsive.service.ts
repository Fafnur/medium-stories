import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { ResponsiveState } from '../+state/responsive.reducer';
import { ResponsiveMode, ResponsiveProperties } from '../interfaces/responsive.interface';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { RESPONSIVE_MODE } from '../responsive.tokens';

@Injectable()
export class BaseResponsiveService implements ResponsiveService {
  constructor(
    protected responsiveStorage: ResponsiveStorage,
    @Inject(RESPONSIVE_MODE) protected responsiveMode: ResponsiveMode,
    @Inject(PLATFORM_ID) protected platformId: any
  ) {}

  checkBetween(type: string, expressions: string[]): boolean {
    let result = false;
    expressions.forEach(expression => {
      const args: string[] = expression.split(',');

      if (
        args.length === 2 &&
        this.responsiveMode.sizes[type] >= this.responsiveMode.sizes[args[0]] &&
        this.responsiveMode.sizes[type] < this.responsiveMode.sizes[args[1]]
      ) {
        result = true;
      }
    });

    return result;
  }

  checkEqual(type: string, expressions: string[]): boolean {
    let result = false;
    expressions.forEach(expression => {
      const args = expression.split(',');

      if (args.length === 1 && args[0] === type) {
        result = true;
      }
    });

    return result;
  }

  checkMax(type: string, expressions: string[]): boolean {
    let result = false;
    expressions.forEach(expression => {
      const args = expression.split(',');

      if (args.length === 1 && this.responsiveMode.sizes[type] < this.responsiveMode.sizes[args[0]]) {
        result = true;
      }
    });

    return result;
  }

  checkMin(type: string, expressions: string[]): boolean {
    let result = false;
    expressions.forEach(expression => {
      const args = expression.split(',');

      if (args.length === 1 && this.responsiveMode.sizes[type] >= this.responsiveMode.sizes[args[0]]) {
        result = true;
      }
    });

    return result;
  }

  getChangesByProperties(props: Partial<ResponsiveProperties>): Partial<ResponsiveProperties> {
    const changes: Partial<ResponsiveState> = {};

    if ('height' in props) {
      changes.height = props.height;
    }

    if ('width' in props) {
      changes.width = props.width;
      changes.mobile = this.isMobile(props.width);
      changes.responsiveType = this.getResponsiveTypeByWidth(props.width);
    }
    // Save properties on cookie storage
    this.responsiveStorage.setProperties(changes);

    return changes;
  }

  getResponsiveProperties(): ResponsiveProperties {
    let props: ResponsiveProperties;
    if (isPlatformBrowser(this.platformId)) {
      props = this.getChangesByProperties(
        this.getChangesByProperties({ height: window.innerHeight, width: window.innerWidth })
      ) as ResponsiveProperties;
      this.responsiveStorage.setProperties(props);
    } else {
      props = this.responsiveStorage.getProperties();
    }

    return props;
  }

  getResponsiveTypeByWidth(width: number): string {
    let responseType: string = null;
    const sizes = Object.entries(this.responsiveMode.sizes).sort((a, b) => b[1] - a[1]);
    for (const [type, size] of sizes) {
      if (width >= size) {
        responseType = type;
        break;
      }
    }
    if (!responseType) {
      responseType = sizes[sizes.length - 1][0];
    }

    return responseType;
  }

  isMobile(width: number): boolean {
    return width < this.responsiveMode.sizes[this.responsiveMode.mobile];
  }
}
