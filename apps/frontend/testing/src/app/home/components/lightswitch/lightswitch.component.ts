import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-lightswitch',
  templateUrl: './lightswitch.component.html',
  styleUrls: ['./lightswitch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightswitchComponent {
  isOn = false;

  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}
