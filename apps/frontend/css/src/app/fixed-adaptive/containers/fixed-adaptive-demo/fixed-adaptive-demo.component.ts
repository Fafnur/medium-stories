import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-fixed-adaptive-demo',
  templateUrl: './fixed-adaptive-demo.component.html',
  styleUrls: ['./fixed-adaptive-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedAdaptiveDemoComponent {}
