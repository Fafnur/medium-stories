import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FieldWithOptionsComponent } from '../../interfaces/form.interface';
import { extractTouchedChanges } from '../../utils/form-changes.util';

@Component({
  selector: 'ms-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldSelectComponent extends FieldWithOptionsComponent implements OnInit {
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
    super.ngOnInit();
    this.touchedChanged$ = extractTouchedChanges(this.formControl).pipe(tap(() => this.changeDetectorRef.markForCheck()));
    this.valueChanges$ = this.formControl.valueChanges.pipe(tap(() => this.changeDetectorRef.markForCheck()));
  }

  /**
   * On blur
   */
  onBlur(): void {
    if (this.field.autoSelect && !this.formControl.value && this.options && this.options.length) {
      const option = this.options[0];
      const value = this.isArray ? option : option[this.mapValue];
      this.formControl.patchValue(value);
    }
  }
}
