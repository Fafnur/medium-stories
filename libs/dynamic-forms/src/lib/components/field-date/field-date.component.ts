import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { FieldComponent, FormFieldOption } from '../../interfaces/form.interface';
import { getDays, getDaysByMonthAndYear, getMonthChoices, getYears } from '../../utils/date.util';

@Component({
  selector: 'ms-field-date',
  templateUrl: './field-date.component.html',
  styleUrls: ['./field-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldDateComponent extends FieldComponent implements OnInit {
  /**
   * DateData control
   */
  dateForm!: FormGroup;

  /**
   * Days for select
   */
  days: number[] = getDays();

  /**
   * Months for select
   */
  months: FormFieldOption[] = getMonthChoices();

  /**
   * Years for select
   */
  years: number[] = getYears();

  /**
   * Watching for change control
   */
  valueChanges$!: Observable<string>;

  constructor(protected formBuilder: FormBuilder) {
    super();
    this.dateForm = this.formBuilder.group({
      day: [null, [Validators.required]],
      month: [null, [Validators.required]],
      year: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    const years = this.field.attrs && this.field.attrs.years;
    if (years) {
      this.years = getYears(null, years.start, years.end);
    }
    if (this.formControl.value) {
      this.patchDate();
    }
    this.valueChanges$ = this.formControl.valueChanges.pipe(
      filter(data => !!data),
      tap(() => {
        if (this.dateForm.invalid) {
          this.patchDate();
        }
      })
    );
  }

  /**
   * Set auto value for empty select
   */
  onControlBlur(control: AbstractControl, value: string | number): void {
    if (!control.value) {
      control.setValue(value);
      this.onChanged();
    }
  }

  /**
   * Update control
   */
  onChanged(): void {
    const selectedDay = this.dateForm.get('day').value;
    const month = this.dateForm.get('month').value;
    const year = this.dateForm.get('year').value;

    if (month && year) {
      const newDays = getDaysByMonthAndYear(+month, +year);
      if (newDays.length !== this.days.length) {
        this.days = newDays;
      }
      if (month && year && selectedDay && +selectedDay > this.days.length) {
        this.dateForm.get('day').patchValue(1);
      }
    }

    if (this.dateForm.valid) {
      this.formControl.patchValue(this.getDateData());
    }
  }

  protected patchDate(): void {
    const date = moment(this.formControl.value, 'YYYY-MM-DD');
    this.dateForm.patchValue({
      day: date.date(),
      month: date.month() + 1,
      year: date.year()
    });
  }

  /**
   * Return birthday in format YYYY-M-D
   */
  protected getDateData(): string {
    const data = this.dateForm.value;

    return moment(`${data.year}-${data.month}-${data.day}`, 'YYYY-M-D').format('YYYY-MM-DD');
  }
}
