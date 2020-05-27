import { Routes } from '@angular/router';

import { FixedAdaptiveLegacyComponent } from './components/fixed-adaptive-legacy/fixed-adaptive-legacy.component';
import { FixedAdaptiveComponent } from './components/fixed-adaptive/fixed-adaptive.component';
import { FixedAdaptiveDemoComponent } from './containers/fixed-adaptive-demo/fixed-adaptive-demo.component';

export const fixedAdaptiveComponents: any[] = [FixedAdaptiveComponent, FixedAdaptiveLegacyComponent];

export const fixedAdaptiveContainers: any[] = [FixedAdaptiveDemoComponent];

export const fixedAdaptiveRoutes: Routes = [
  {
    path: '',
    component: FixedAdaptiveDemoComponent
  }
];
