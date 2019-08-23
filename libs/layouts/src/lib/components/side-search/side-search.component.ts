import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'medium-stories-side-search',
  templateUrl: './side-search.component.html',
  styleUrls: ['./side-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SideSearchComponent {}
