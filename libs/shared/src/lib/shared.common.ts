import { MsIconComponent } from './components/ms-icon.component';
import { MsLetDirective } from './directives/ms-let.directive';
import { MsRunDirective } from './directives/ms-run.directive';
import { LanguageLabelPipe } from './pipes/language-label.pipe';

export const sharedComponents: any[] = [MsIconComponent];

export const sharedDirectives: any[] = [MsLetDirective, MsRunDirective];

export const sharedPipes: any[] = [LanguageLabelPipe];
