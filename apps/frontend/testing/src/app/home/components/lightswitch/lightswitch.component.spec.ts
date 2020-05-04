import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new LightswitchComponent();
    expect(comp.isOn).toBeFalsy();
    comp.clicked();
    expect(comp.isOn).toBeTruthy();
    comp.clicked();
    expect(comp.isOn).toBeFalsy();
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new LightswitchComponent();
    expect(comp.message).toMatch(/is off/i);
    comp.clicked();
    expect(comp.message).toMatch(/is on/i);
  });
});
