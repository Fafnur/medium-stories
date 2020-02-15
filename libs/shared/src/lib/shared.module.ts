import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faPinterestP, faTelegramPlane, faTwitter, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleRight, faAngleUp, faBars, faChevronLeft, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { sharedComponents, sharedDirectives, sharedPipes } from './shared.common';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  declarations: [...sharedComponents, ...sharedDirectives, ...sharedPipes],
  exports: [...sharedComponents, ...sharedDirectives, ...sharedPipes]
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    /**
     * Add an icon to the library for convenient access in other components
     */
    this.library.addIcons(
      faBars,
      faChevronLeft,
      faCog,
      faSearch,
      faAngleRight,
      faAngleDown,
      faAngleUp,
      faFacebookF,
      faVk,
      faTwitter,
      faYoutube,
      faInstagram,
      faPinterestP,
      faTelegramPlane
    );
  }
}
