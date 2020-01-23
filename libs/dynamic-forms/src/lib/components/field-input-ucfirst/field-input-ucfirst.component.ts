import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { extractTouchedChanges } from '../../utils/form-changes.util';
import { FieldComponent } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-field-input-ucfirst',
  templateUrl: './field-input-ucfirst.component.html',
  styleUrls: ['./field-input-ucfirst.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldInputUcfirstComponent extends FieldComponent implements OnInit {
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
