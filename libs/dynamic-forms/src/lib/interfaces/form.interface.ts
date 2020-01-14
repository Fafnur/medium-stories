import { ComponentRef, Type } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Form config
 */
export interface FormConfig {
  /**
   * Form field config
   */
  fields: (FormField | FormFieldWithOptions | FormFieldInputMask | FormFieldInputRange | FormGroupField)[];

  /**
   * Form id
   * Need to refresh config's
   */
  id?: string;

  /**
   * Form classes
   */
  classes?: string;

  /**
   * Common wrapper component
   */
  wrapper?: string | FormFieldWrapperType | Type<any>;

  /**
   * Abstract control options
   */
  options?: AbstractControlOptions | { [key: string]: any } | null;

  /**
   * Fields component refs
   */
  refs?: { [key: string]: { wrapperRef?: ComponentRef<WrapperComponent>; fieldRef?: ComponentRef<FieldComponent> } };
}

/**
 * Form field types
 */
export enum FormFieldType {
  Checkbox = 'checkbox',
  Date = 'date',
  Input = 'input',
  InputMask = 'input_mask',
  InputRange = 'input_range',
  InputUCFirst = 'input_ucfirst',
  Radio = 'radio',
  Select = 'select',
  Textarea = 'textarea',
  Hidden = 'hidden',
  Typehead = 'typehead'
}

/**
 * Form field types
 */
export enum FormFieldWrapperType {
  Default = 'default',
  Empty = 'empty',
  None = 'none'
}

/**
 * Form field attributes
 */
export interface FormFieldAttributes {
  [key: string]: any;

  /**
   * Field id
   */
  id: string;

  /**
   * Field name
   */
  name: string;

  /**
   * Placeholder
   */
  placeholder: string;

  /**
   * Input type
   */
  type: string;

  /**
   * Autocomplete
   */
  autocomplete: string;

  /**
   * Cols
   */
  cols: number;

  /**
   * Rows
   */
  rows: number;

  /**
   * Date years
   */
  years: { start?: number; end?: number };
}

/**
 * Form field
 */
export interface FormField<T extends object = any> {
  /**
   * Unique key field
   */
  key: string;

  /**
   * Form field type
   */
  type: string | FormFieldType | Type<any>;

  /**
   * Html attrs
   */
  attrs?: Partial<FormFieldAttributes>;

  /**
   * Field name
   */
  label?: string;

  /**
   * Classes
   */
  classes?: string;

  /**
   * Is inline
   */
  inline?: string;

  /**
   * Wrapper classes
   */
  wrapperClasses?: string;

  /**
   * Wrapper component
   */
  wrapper?: string | FormFieldWrapperType | Type<any>;

  /**
   * Field validators
   */
  validators?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;

  /**
   * Default
   */
  defaultValue?: any;

  /**
   * Custom data
   */
  data?: T;

  /**
   * Is static
   */
  static?: boolean;

  /**
   * Is show error
   */
  showError?: boolean;

  /**
   * Is hide field
   * @param payload Form field hide payload
   */
  hide?: (payload: Partial<FormFieldHidePayload>) => boolean;
}

export interface FormFieldHidePayload {
  field: FormField;
  formControl: AbstractControl;
  formGroup: FormGroup;
  fieldGroup: FormGroupField;
}

/**
 * Form field
 */
export interface FormGroupField {
  fields: (FormField | FormFieldWithOptions | FormFieldInputMask | FormFieldInputRange)[];

  /**
   * Subform
   */
  subForm?: FormGroup;

  /**
   * Html attrs
   */
  attrs?: Partial<FormFieldAttributes>;

  /**
   * Unique key field
   */
  key: string;

  /**
   * Field name
   */
  label?: string;

  /**
   * Wrapper classes
   */
  wrapperClasses?: string;

  /**
   * Wrapper component
   */
  wrapper?: string | FormFieldWrapperType | Type<any>;

  /**
   * Is hide field
   * @param payload Form field hide payload
   */
  hide?: (payload: Partial<FormFieldHidePayload>) => boolean;
}

export interface FormFieldWithOptions extends FormField {
  /**
   * Options
   */
  options: string[] | FormFieldOption[] | Observable<FormFieldOption[]>;

  /**
   * Options map label
   */
  mapLabel?: string;

  /**
   * Options map value
   */
  mapValue?: string;

  /**
   * Auto select if empty
   */
  autoSelect?: boolean;

  /**
   * Max result
   */
  maxResult?: number;
}

export class MaskOptions {
  mask: Array<string | RegExp> | ((raw: string) => Array<string | RegExp>) | false;
  prefix?: string;
  guide?: boolean;
  placeholderChar?: string;
  pipe?: (conformedValue: string, config: MaskOptions) => false | string | object;
  keepCharPositions?: boolean;
  showMask?: boolean;
  removeMaskChars?: boolean;
}

export interface FormFieldInputMask extends FormField {
  /**
   * Options map label
   */
  maskOptions: MaskOptions;
}

export interface FormFieldInputRange extends FormField {
  /**
   * Options for range
   */
  rangeOptions: RangeOptions;
}

export enum RangeMode {
  Fixed = 'fixed',
  Percent = 'percent'
}

export interface RangeOptions {
  [key: string]: any;

  /**
   * Minimal value
   */
  min: number;

  /**
   * Maximum value
   */
  max: number;

  /**
   * Range mode
   */
  mode?: RangeMode | string;

  /**
   * Range step
   */
  step?: number;

  /**
   * Range default value
   */
  defaultValue?: number;

  /**
   * Range maxlength
   */
  maxlength?: number | string;

  /**
   * Normalize value after input
   * @param value New value
   * @param config Range options
   * @param width Current range width
   */
  normalize?(value: number | string, config?: RangeOptions, width?: number): number;
}

export interface FormFieldOption {
  [key: string]: any;

  /**
   * Option value
   */
  label?: string;

  /**
   * Option value
   */
  value?: string | number | null;
}

export interface FormFieldInputRange extends FormField {
  /**
   * Options map label
   */
  rangeOptions: RangeOptions;
}

/**
 * Abstract field component
 */
export abstract class FieldComponent<T extends FormField = FormField, D = any> {
  /**
   * Form field config
   */
  field!: T;

  /**
   * Data
   */
  data?: D;

  /**
   * FormControl
   */
  formControl!: AbstractControl;

  /**
   * Form field config
   */
  formConfig!: FormConfig;

  /**
   * Form
   */
  form!: FormGroup;

  /**
   * On blur event
   */
  onBlur(): void {
    const value = this.formControl.value;
    if (value && typeof value === 'string') {
      const trimValue = value ? value.trim() : '';
      if (trimValue !== value) {
        this.formControl.patchValue(trimValue, { emitEvent: false });
        this.formControl.markAllAsTouched();
      }
    }
  }

  get classes(): string {
    return this.field.classes || '';
  }

  get wrapperClasses(): string {
    return this.field.wrapperClasses || '';
  }

  get id(): string {
    return this.field.attrs && this.field.attrs.id ? this.field.attrs.id : this.field.key;
  }

  get name(): string {
    return this.field.attrs && this.field.attrs.name ? this.field.attrs.name : this.field.key;
  }
}

/**
 * Abstract field wrapper component
 */
export abstract class WrapperComponent<T extends FormField = FormField> extends FieldComponent<T> {
  /**
   * Form control
   */
  formControl: AbstractControl | FormGroup;

  /**
   * Field is group fields
   */
  grouped?: boolean;
}

/**
 * Abstract field component
 */
export abstract class FieldWithOptionsComponent<T extends FormFieldWithOptions = FormFieldWithOptions> extends FieldComponent<T> {
  /**
   * Watching options
   */
  options$!: Observable<string[] | FormFieldOption[]>;

  /**
   * Loaded options
   */
  options!: string[] | FormFieldOption[];

  /**
   * Is array options
   */
  isArray = false;

  get mapValue(): string {
    return this.field.mapValue || 'value';
  }

  get mapLabel(): string {
    return this.field.mapLabel || 'label';
  }

  ngOnInit(): void {
    if (this.field.options instanceof Observable) {
      this.options$ = this.field.options.pipe(
        tap(options => {
          this.options = options || [];
          this.isArray = this.checkIsArray();
        })
      );
    } else {
      this.options$ = of([]);
      this.options = this.field.options || [];
      this.isArray = this.checkIsArray();
    }
  }

  /**
   * Check is simple array
   */
  protected checkIsArray(): boolean {
    return this.options.length && typeof this.options[0] !== 'object';
  }
}
