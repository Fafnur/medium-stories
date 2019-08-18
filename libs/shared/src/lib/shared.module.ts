import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { sharedComponents, sharedDirectives } from './shared.common';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  declarations: [...sharedComponents, ...sharedDirectives],
  exports: [...sharedComponents, ...sharedDirectives]
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    /**
     * Add an icon to the library for convenient access in other components
     */
    this.library.addIcons(faBars, faCog, faSearch);
  }
}
