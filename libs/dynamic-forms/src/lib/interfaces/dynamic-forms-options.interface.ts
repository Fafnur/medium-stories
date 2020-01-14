import { Type } from '@angular/core';

import { FormConstructor } from './form-constructor.interface';

/**
 * Dynamic forms options
 */
export interface DynamicFormsOptions {
  /**
   * Form constructor
   */
  formConstructor: Type<FormConstructor>;
}
