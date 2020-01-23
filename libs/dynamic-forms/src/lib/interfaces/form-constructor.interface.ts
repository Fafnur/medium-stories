import { ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormConfig } from './form.interface';

export abstract class FormConstructor {
  /**
   * Register controls
   * @param formConfig FormConfig
   * @param formGroup FormGroup
   */
  abstract registerControls(formConfig: FormConfig, formGroup: FormGroup): void;

  /**
   * Render controls
   * @param formConfig FormConfig
   * @param formGroup FormGroup
   * @param viewContainer ViewContainerRef
   */
  abstract renderControls(formConfig: FormConfig, formGroup: FormGroup, viewContainer: ViewContainerRef): void;

  /**
   * Update controls
   * @param formConfig FormConfig
   * @param formGroup FormGroup
   * @param viewContainer ViewContainerRef
   */
  abstract updateControls(formConfig: FormConfig, formGroup: FormGroup, viewContainer: ViewContainerRef): void;
}
