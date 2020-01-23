import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';

import { FieldWrapperComponent } from '@medium-stories/dynamic-forms';

@Component({
  selector: 'medium-stories-event-new-field-wrapper',
  templateUrl: './event-new-field-wrapper.component.html',
  styleUrls: ['./event-new-field-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventNewFieldWrapperComponent extends FieldWrapperComponent implements OnDestroy, OnInit {
  constructor(protected changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  getErrorLabel(error: string): string | null {
    return error ? `events.new.validators.${this.field.key}.${error}` : null;
  }
}
