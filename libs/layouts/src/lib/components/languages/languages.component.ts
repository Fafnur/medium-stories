import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TranslationFacade } from '@medium-stories/translation';

@Component({
  selector: 'medium-stories-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LanguagesComponent {
  constructor(public translationFacade: TranslationFacade, private modalService: NgbModal) {}

  open(content: TemplateRef<any>): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-language', centered: true, size: 'lg', windowClass: 'ms-modal-promo' });
  }
}
