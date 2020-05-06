import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-banner-toggle',
  templateUrl: './banner-toggle.component.html',
  styleUrls: ['./banner-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerToggleComponent {
  status = true;

  get message(): string {
    return this.status ? 'Active' : 'Disable';
  }

  onToggle(): void {
    this.status = !this.status;
  }
}
