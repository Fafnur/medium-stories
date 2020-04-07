import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalizationService } from '../../../localization.service';

@Component({
  selector: 'medium-stories-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor(private localizationService: LocalizationService) {}

  onChangeLang(locale: string): void {
    this.localizationService.setLocale(locale);
    // if (typeof window !== 'undefined') {
    //   window.location.href = '/';
    // }
  }
}
