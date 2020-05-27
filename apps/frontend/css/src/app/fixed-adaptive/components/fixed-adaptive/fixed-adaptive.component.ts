import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-fixed-adaptive',
  templateUrl: './fixed-adaptive.component.html',
  styleUrls: ['./fixed-adaptive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedAdaptiveComponent {}
