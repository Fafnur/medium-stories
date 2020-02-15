import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FieldComponent, FormFieldInputRange } from '../../interfaces/form.interface';
import { extractTouchedChanges } from '../../utils/form-changes.util';

@Component({
  selector: 'ms-field-input-range',
  templateUrl: './field-input-range.component.html',
  styleUrls: ['./field-input-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldInputRangeComponent extends FieldComponent<FormFieldInputRange> implements OnInit {
  /**
   * Detect touched changed
   */
  touchedChanged$!: Observable<boolean>;

  /**
   * Value changes
   */
  valueChanges$!: Observable<boolean>;

  constructor(protected changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.touchedChanged$ = extractTouchedChanges(this.formControl).pipe(tap(() => this.changeDetectorRef.markForCheck()));
    this.valueChanges$ = this.formControl.valueChanges.pipe(tap(() => this.changeDetectorRef.markForCheck()));
  }

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
