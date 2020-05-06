import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Banner } from '../banner-edit/banner-edit.component';

@Component({
  selector: 'medium-stories-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerListComponent {
  banners: Banner[] = [
    {
      id: 1,
      name: 'First banner'
    },
    {
      id: 2,
      name: 'Second banner'
    }
  ];
  selectedBanner: Banner;

  onSelectedBanner(banner: Banner): void {
    this.selectedBanner = banner;
  }
}
