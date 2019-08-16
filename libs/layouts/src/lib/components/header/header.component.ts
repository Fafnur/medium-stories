import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'medium-stories-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
