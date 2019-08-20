import { Routes } from '@angular/router';

import { NavLink } from '@medium-stories/layouts';

import { AppComponent } from './containers/app/app.component';

export const coreContainers: any[] = [AppComponent];

export const coreRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  }
];

export const coreNavLinks: NavLink[] = [
  {
    label: 'menu.models.title',
    route: '/',
    children: [
      {
        label: 'menu.models.urus',
        route: '/'
      },
      {
        label: 'menu.models.huracan',
        route: '/',
        children: [
          {
            label: 'menu.models.huracanEVO',
            route: '/'
          },
          {
            label: 'menu.models.huracanEVOSpyder',
            route: '/'
          },
          {
            label: 'menu.models.huracanRWD',
            route: '/'
          },
          {
            label: 'menu.models.huracanRWDSpyder',
            route: '/'
          },
          {
            label: 'menu.models.huracanPerformante',
            route: '/'
          },
          {
            label: 'menu.models.huracanPerformanteSpyder',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.models.aventador',
        route: '/',
        children: [
          {
            label: 'menu.models.aventadorS',
            route: '/'
          },
          {
            label: 'menu.models.aventadorSRoadster',
            route: '/'
          },
          {
            label: 'menu.models.aventadorSVJ',
            route: '/'
          },
          {
            label: 'menu.models.aventadorSVJRoadster',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.models.fewOff',
        route: '/',
        children: [
          {
            label: 'menu.models.centenarioRoadster',
            route: '/'
          },
          {
            label: 'menu.models.centenario',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.models.concept',
        route: '/',
        children: [
          {
            label: 'menu.models.terzoMillennio',
            route: '/'
          },
          {
            label: 'menu.models.asterion',
            route: '/'
          },
          {
            label: 'menu.models.estoque',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.models.adPersonam',
        route: '/'
      }
    ]
  },
  {
    label: 'menu.brand.title',
    route: '/',
    children: [
      {
        label: 'menu.brand.people',
        route: '/',
        children: [
          {
            label: 'menu.brand.ferruccioLamborghini',
            route: '/'
          },
          {
            label: 'menu.brand.marcelloGandini',
            route: '/'
          },
          {
            label: 'menu.brand.giampaoloDallara',
            route: '/'
          },
          {
            label: 'menu.brand.paoloStanzani',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.brand.history',
        route: '/'
      },
      {
        label: 'menu.brand.masterpieces',
        route: '/'
      },
      {
        label: 'menu.brand.design',
        route: '/'
      },
      {
        label: 'menu.brand.innovationExcellence',
        route: '/',
        children: [
          {
            label: 'menu.brand.forgedComposites',
            route: '/'
          },
          {
            label: 'menu.brand.carbonFiber',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.brand.sinceWeMadeItPossible',
        route: '/'
      }
    ]
  },
  {
    label: 'menu.ownership.title',
    route: '/',
    children: [
      {
        label: 'menu.ownership.locators',
        route: '/',
        children: [
          {
            label: 'menu.ownership.dealerLocator',
            route: '/'
          },
          {
            label: 'menu.ownership.serviceLocator',
            route: '/'
          },
          {
            label: 'menu.ownership.collisionCenter',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.ownership.preOwned',
        route: '/',
        children: [
          {
            label: 'menu.ownership.selezione',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.ownership.accessoriOriginali',
        route: '/'
      },
      {
        label: 'menu.ownership.spareParts',
        route: '/'
      },
      {
        label: 'menu.ownership.services',
        route: '/',
        children: [
          {
            label: 'menu.ownership.assistance',
            route: '/'
          },
          {
            label: 'menu.ownership.warranty',
            route: '/'
          },
          {
            label: 'menu.ownership.careProgram',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.ownership.poloStorico',
        route: '/'
      },
      {
        label: 'menu.ownership.financialServices',
        route: '/'
      }
    ]
  },
  {
    label: 'menu.experience.title',
    route: '/',
    children: [
      {
        label: 'menu.experience.news',
        route: '/'
      },
      {
        label: 'menu.experience.events',
        route: '/'
      },
      {
        label: 'menu.experience.museum',
        route: '/'
      },
      {
        label: 'menu.experience.esperienzaPrograms',
        route: '/'
      },
      {
        label: 'menu.experience.lounge',
        route: '/'
      },
      {
        label: 'menu.experience.mobileApp',
        route: '/'
      }
    ]
  },
  {
    label: 'menu.motorsport',
    route: '/'
  },
  {
    label: 'menu.store',
    route: '/'
  }
];
