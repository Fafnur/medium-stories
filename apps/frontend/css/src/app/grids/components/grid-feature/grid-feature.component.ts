import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-grid-feature',
  templateUrl: './grid-feature.component.html',
  styleUrls: ['./grid-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridFeatureComponent {}
