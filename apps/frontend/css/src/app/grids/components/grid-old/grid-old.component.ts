import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-grid-old',
  templateUrl: './grid-old.component.html',
  styleUrls: ['./grid-old.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridOldComponent {}
