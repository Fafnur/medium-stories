import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-grids-demo',
  templateUrl: './grids-demo.component.html',
  styleUrls: ['./grids-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridsDemoComponent {}
