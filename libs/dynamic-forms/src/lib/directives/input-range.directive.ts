import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RangeOptions } from '../interfaces/form.interface';

@Directive({
  selector: '[msInputRange][formControlName],[msInputRange][formControl],[msInputRange][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRangeDirective),
      multi: true
    }
  ]
})
export class InputRangeDirective implements ControlValueAccessor {
  /**
   * Range options
   */
  @Input() msInputRange: RangeOptions;

  constructor(public elementRef: ElementRef) {}

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    if (this.msInputRange.defaultValue == null) {
      this.msInputRange.defaultValue = 0;
    } else if (this.msInputRange.defaultValue > this.msInputRange.max) {
      this.msInputRange.defaultValue = this.msInputRange.max;
    } else if (this.msInputRange.defaultValue < this.msInputRange.min) {
      this.msInputRange.defaultValue = this.msInputRange.min;
    }
    this.elementRef.nativeElement.value = this.msInputRange.defaultValue;
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    const value =
      typeof this.msInputRange.normalize === 'function'
        ? this.msInputRange.normalize(event.target.value, this.msInputRange)
        : +event.target.value;
    this.elementRef.nativeElement.value = value;
    this.onChange(value);
  }

  /**
   * On touched handler
   */
  private onTouched = () => {};

  /**
   * On change handler
   */
  private onChange: (value: number) => void = () => {};
}
