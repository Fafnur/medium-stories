import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[msInputUcfirst][formControlName],[msInputUcfirst][formControl],[msInputUcfirst][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputUcfirstDirective),
      multi: true
    }
  ]
})
export class InputUcfirstDirective implements ControlValueAccessor {
  constructor(public elementRef: ElementRef) {}

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: string | null): void {
    this.elementRef.nativeElement.value = this.getUcFirst(value);
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    const value = this.getUcFirst(event.target.value);
    this.elementRef.nativeElement.value = value;
    this.onChange(value);
  }

  getUcFirst(value: any): string | null {
    return typeof value === 'string' ? (value.length ? value.charAt(0).toUpperCase() + value.slice(1) : '') : null;
  }

  /**
   * On touched handler
   */
  private onTouched = () => {};

  /**
   * On change handler
   */
  private onChange: (value: string | null) => void = () => {};
}
