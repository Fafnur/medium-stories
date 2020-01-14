import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Event } from '@medium-stories/entities';

import { eventFormConfig } from './event-new.form';

@Component({
  selector: 'medium-stories-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventNewComponent {
  /**
   * Form
   */
  form = new FormGroup({});

  /**
   * Form config
   */
  formConfig = eventFormConfig;

  constructor() {}

  /**
   * On changed form
   * @param data Form value
   */
  onChanged<T extends object = Partial<Event>>(data: T): void {
    // console.log(data);
  }
}
