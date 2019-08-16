import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'medium-stories-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
