import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'medium-stories-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
