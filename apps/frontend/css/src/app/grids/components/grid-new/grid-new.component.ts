import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-grid-new',
  templateUrl: './grid-new.component.html',
  styleUrls: ['./grid-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridNewComponent {}
