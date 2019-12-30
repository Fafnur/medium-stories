import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PromoTopOptions } from '../../interfaces/promo-top.interface';

@Component({
  selector: 'medium-stories-promo-top',
  templateUrl: './promo-top.component.html',
  styleUrls: ['./promo-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoTopComponent {
  @Input() options: PromoTopOptions;
}
