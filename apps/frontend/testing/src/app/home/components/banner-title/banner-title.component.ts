import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerTitleComponent {
  title = 'My title';
}
