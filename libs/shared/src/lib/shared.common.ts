import { IconComponent } from './components/icon/icon.component';
import { MsLetDirective } from './directives/ms-let.directive';
import { MsRunDirective } from './directives/ms-run.directive';
import { LanguageLabelPipe } from './pipes/language-label.pipe';
import { LocalizePipe } from './pipes/localize.pipe';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';
import { PathPipe } from './pipes/path.pipe';

export const sharedComponents: any[] = [IconComponent];

export const sharedDirectives: any[] = [MsLetDirective, MsRunDirective];

export const sharedPipes: any[] = [LanguageLabelPipe, LocalizePipe, LocalizedDatePipe, PathPipe];
