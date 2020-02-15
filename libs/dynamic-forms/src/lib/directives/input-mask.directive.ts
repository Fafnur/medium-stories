import { Directive, ElementRef, forwardRef, HostListener, Inject, Input, OnInit, Optional, Renderer2 } from '@angular/core';
import { COMPOSITION_BUFFER_MODE, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';
import { conformToMask, createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore';

import { MaskOptions } from '../interfaces/form.interface';

/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function isAndroid(): boolean {
  const userAgent = getDOM() ? getDOM().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}

const phoneMaskCharacters = /[()\-_ ]/g;

@Directive({
  selector: '[msInputMask][formControlName],[msInputMask][formControl],[msInputMask][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMaskDirective),
      multi: true
    }
  ]
})
export class InputMaskDirective implements ControlValueAccessor, OnInit {
  @Input() msInputMask: MaskOptions = {
    mask: [],
    guide: true,
    placeholderChar: '_',
    pipe: undefined,
    keepCharPositions: false
  };

  private textMaskInputElement: any;
  private inputElement: HTMLInputElement;

  /**
   * Whether the user is creating a composition string (IME events).
   */
  private composing = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Optional() @Inject(COMPOSITION_BUFFER_MODE) private readonly compositionMode: boolean
  ) {
    if (this.compositionMode == null) {
      this.compositionMode = !isAndroid();
    }
  }

  ngOnInit() {
    this.setupMask(true);
  }

  writeValue(value: any) {
    this.setupMask();

    // set the initial value for cases where the mask is disabled
    const normalizedValue = value == null ? '' : value;
    const conform = conformToMask(normalizedValue, this.msInputMask.mask, this.msInputMask);
    this.inputElement.value = conform.conformedValue;

    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(conform.conformedValue);
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', disabled.toString());
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    let value = event.target.value as string;

    if (value && this.msInputMask.prefix && this.msInputMask.prefix === '+7') {
      if (value[0] === '+') {
        if (value.indexOf('+7', 2) > 0) {
          if (value.indexOf('+7 (+7') === 0) {
            value = `${value.slice(0, 4)}${value.slice(6)}`;
          } else if (value.indexOf('+7+7') === 0) {
            value = `${value.slice(0, 2)}${value.slice(4)}`;
          } else {
            const plain = value.slice(2).replace(/\D+/g, '');
            if (plain.length === 11) {
              value = `${value.slice(0, 4)}${plain.slice(1)}${value.slice(4, 10)}`;
            }
          }
        } else {
          let plain = value.slice(2).replace(/\D+/g, '');
          if (plain.length === 11) {
            if ((value.indexOf('+7 (') === 0 && value[4] === '7') || value[4] === '8') {
              value = `${value.slice(0, 4)}${value.slice(5)}`;
            } else if (value.indexOf('+7') === 0 && (value[2] === '7' || value[2] === '8')) {
              value = `${value.slice(0, 2)}${value.slice(3)}`;
            } else {
              plain = value.slice(value.length - 11);
              if (plain[0] === '7' || plain[0] === '8') {
                value = `${value.slice(0, 4)}${plain.slice(1)}${value.slice(4, value.length - 11)}`;
              }
            }
          }
        }
      } else if (value.length === 11 && (value[0] === '7' || value[0] === '8')) {
        value = ` ${value.slice(1)}`;
      }
    }

    if (!this.compositionMode || (this.compositionMode && !this.composing)) {
      this.setupMask();

      if (this.textMaskInputElement !== undefined) {
        this.textMaskInputElement.update(value);
        // get the updated value
        let unmaskedValue = this.msInputMask.removeMaskChars
          ? this.inputElement.value.replace(phoneMaskCharacters, '')
          : this.inputElement.value;

        const prefixIndex = this.msInputMask.prefix ? unmaskedValue.indexOf(this.msInputMask.prefix) : -1;
        if (prefixIndex >= 0) {
          unmaskedValue = unmaskedValue.slice(this.msInputMask.prefix.length);
        }

        this.onChange(unmaskedValue);
      }
    }
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  @HostListener('compositionstart') onCompositionStart(): void {
    this.composing = true;
  }

  @HostListener('compositionend', ['$event']) onCompositionEnd(value: any): void {
    this.composing = false;
    if (this.compositionMode) {
      this.onInput(value);
    }
  }

  @HostListener('click') onClick(): void {
    this.updateSelection();
  }

  @HostListener('keydown') onKeydown(): void {
    this.updateSelection();
  }

  private setupMask(create = false) {
    if (!this.inputElement) {
      if (this.elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
        // `textMask` directive is used directly on an input element
        this.inputElement = this.elementRef.nativeElement;
      } else {
        // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
        this.inputElement = this.elementRef.nativeElement.getElementsByTagName('INPUT')[0];
      }
    }

    if (this.inputElement && create) {
      this.textMaskInputElement = createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.msInputMask));
    }
  }

  private updateSelection(): void {
    const htmlInputElement = this.elementRef.nativeElement;
    const placeholderChar = this.msInputMask.placeholderChar || '_';
    const prefix = this.msInputMask.prefix ? this.msInputMask.prefix.length : 0;
    const maskPosition = htmlInputElement.value ? htmlInputElement.value.indexOf(placeholderChar) : prefix;
    const selectionStart = htmlInputElement.selectionStart || 0;
    const selectionEnd = htmlInputElement.selectionEnd || 0;

    if (selectionStart === selectionEnd) {
      let newPosition = prefix;
      if (maskPosition >= 0 && maskPosition < selectionStart) {
        newPosition = maskPosition;
      } else if (selectionStart > prefix) {
        newPosition = selectionStart;
      }

      htmlInputElement.setSelectionRange(newPosition, newPosition);
    }
  }

  /**
   * On touched handler
   */
  private onTouched = () => {};

  /**
   * On change handler
   */
  private onChange: (value: string) => void = () => {};
}
