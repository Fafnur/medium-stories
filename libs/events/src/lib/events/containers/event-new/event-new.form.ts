import { Validators } from '@angular/forms';

import { FormConfig, FormFieldType } from '@medium-stories/dynamic-forms';

export const eventFormConfig: FormConfig = {
  id: 'new-event',
  fields: [
    {
      key: 'title',
      type: FormFieldType.Input,
      label: 'events.fields.title',
      attrs: {
        type: 'text',
        id: 'event-title',
        name: 'event[title]'
      },
      validators: [Validators.required]
    }
  ]
};
