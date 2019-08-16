import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'medium-stories-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
  /**
   * Classes for host component
   */
  @HostBinding('class') classes = 'layout layout-base';
}
