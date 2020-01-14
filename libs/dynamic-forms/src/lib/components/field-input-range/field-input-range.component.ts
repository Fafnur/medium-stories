import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FieldComponent, FormFieldInputRange } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-field-input-range',
  templateUrl: './field-input-range.component.html',
  styleUrls: ['./field-input-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldInputRangeComponent extends FieldComponent<FormFieldInputRange> {
  /**
   * Return range width for css
   */
  get rangeWidth(): object {
    return {
      ['width.%']: this.width
    };
  }

  /**
   * Return width on percent
   */
  get width(): number {
    return this.formControl.value != null
      ? (this.formControl.value - this.field.rangeOptions.min) / ((this.field.rangeOptions.max - this.field.rangeOptions.min) / 100)
      : 0;
  }
}
