import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { FieldComponent, FormConfig, FormField } from '../../lib/interfaces/form.interface';
import { formConfigStub, formFieldStub } from '../stubs/form.stub';

export interface FieldComponentParams<T extends FormField = any, D = any> {
  /**
   * Form field config
   */
  field: T;

  /**
   * Data
   */
  data: D;

  /**
   * FormControl
   */
  formControl: AbstractControl;

  /**
   * Form field config
   */
  formConfig: FormConfig;

  /**
   * Form
   */
  form: FormGroup;
}

export function mockFieldComponentProps<T extends FieldComponent = any, R extends FieldComponentParams = FieldComponentParams>(
  component: T,
  props?: Partial<R>
) {
  const options: Partial<R> = props || {};
  component.formControl = options.formControl || new FormControl({});
  component.form = options.form || new FormGroup({});
  component.formConfig = options.formConfig || formConfigStub;
  component.field = options.field || formFieldStub;
}
