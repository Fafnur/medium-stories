import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleRight, faAngleUp, faBars, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faVk, faTwitter, faYoutube, faInstagram, faPinterestP, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
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
