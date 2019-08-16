import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'medium-stories-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
