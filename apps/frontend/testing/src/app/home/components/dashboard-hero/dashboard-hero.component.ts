import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface Hero {
  /**
   * Hero id
   */
  id: number;

  /**
   * Hero name
   */
  name: string;
}

@Component({
  selector: 'medium-stories-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeroComponent {
  @Input() hero: Hero;

  @Output() selected = new EventEmitter<Hero>();

  onSelectHero(): void {
    this.selected.emit(this.hero);
  }
}
