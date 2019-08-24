import { ChangeDetectionStrategy, Component } from '@angular/core';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TranslationFacade } from '@medium-stories/translation';

@Component({
  selector: 'medium-stories-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
