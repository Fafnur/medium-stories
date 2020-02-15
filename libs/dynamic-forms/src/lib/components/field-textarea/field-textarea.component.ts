import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FieldComponent } from '../../interfaces/form.interface';
import { extractTouchedChanges } from '../../utils/form-changes.util';

@Component({
  selector: 'ms-field-textarea',
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldTextareaComponent extends FieldComponent implements OnInit {
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
}
