import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { FieldWithOptionsComponent, FormFieldOption } from '../../interfaces/form.interface';

@Component({
  selector: 'ms-field-typehead',
  templateUrl: './field-typehead.component.html',
  styleUrls: ['./field-typehead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldTypeheadComponent extends FieldWithOptionsComponent implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
  }

  get maxResult(): number {
    return this.field.maxResult || 10;
  }

  /**
   * Typehead formatter
   */
  formatter: (result: any) => string = (result: any) => {
    return typeof result === 'string' ? result : result[this.mapLabel];
  };

  /**
   * Typehead search
   */
  search = (text$: Observable<string>): Observable<any> => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => {
        let options: string[] | FormFieldOption[] | any[];
        if (this.options && this.options.length) {
          if (typeof this.options[0] === 'string') {
            options = (this.options as string[])
              .filter(option => option.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, this.maxResult);
          } else {
            options = (this.options as FormFieldOption[])
              .filter(option => option[this.mapValue].toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, this.maxResult);
          }
        }

        return of(options);
      })
    );
  };
}
