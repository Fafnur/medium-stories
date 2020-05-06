import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Banner } from '../banner-edit/banner-edit.component';

@Component({
  selector: 'medium-stories-banner-details',
  templateUrl: './banner-details.component.html',
  styleUrls: ['./banner-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerDetailsComponent {
  @Input() banner: Banner;
  @Output() selected = new EventEmitter<Banner>();

  onSelected(): void {
    this.selected.emit(this.banner);
  }
}
