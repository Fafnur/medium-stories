import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'medium-stories-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  constructor(private modalService: NgbModal) {}

  /**
   * Open popup
   * @param content Template for popup
   */
  open(content: TemplateRef<any>): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-search', centered: true, windowClass: 'ms-modal' });
  }
}
