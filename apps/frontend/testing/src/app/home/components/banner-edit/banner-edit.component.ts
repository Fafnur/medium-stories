import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Banner {
  id: number;
  name: string;
}

@Component({
  selector: 'medium-stories-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerEditComponent implements OnInit {
  banner: Banner;

  constructor() {}

  ngOnInit(): void {
    this.banner = { id: 1, name: 'Simple Banner' };
  }
}
