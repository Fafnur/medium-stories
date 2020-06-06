import { Type } from '@angular/core';
import { Routes } from '@angular/router';

import { GridFeatureComponent } from './components/grid-feature/grid-feature.component';
import { GridNewComponent } from './components/grid-new/grid-new.component';
import { GridOldComponent } from './components/grid-old/grid-old.component';
import { GridsDemoComponent } from './containers/grids-demo/grids-demo.component';

export const gridsComponents: Type<any>[] = [GridFeatureComponent, GridNewComponent, GridOldComponent];

export const gridsContainers: Type<any>[] = [GridsDemoComponent];

export const gridsRoutes: Routes = [
  {
    path: '',
    component: GridsDemoComponent,
  },
];
