import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'medium-stories-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
