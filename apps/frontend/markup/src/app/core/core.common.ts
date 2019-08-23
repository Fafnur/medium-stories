import { Routes } from '@angular/router';

import { NavLink } from '@medium-stories/layouts';

import { AppComponent } from './containers/app/app.component';

export const coreContainers: any[] = [AppComponent];

export const coreRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'events',
    loadChildren: () => import('../events/events.module').then(m => m.EventsModule)
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
    anchors: [
      {
        label: 'menu.brand.heritage',
        link: 'heritage'
      }
    ],
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
    anchors: [
      {
        label: 'menu.ownership.dealerLocator',
        link: 'dealer-locator'
      },
      {
        label: 'menu.ownership.preOwnedCar',
        link: 'pre-owned-car'
      },
      {
        label: 'menu.ownership.accessoriesAndServices',
        link: 'accessories-and-services'
      }
    ],
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
    route: '/events',
    anchors: [
      {
        label: 'menu.experience.museumHash',
        link: 'museum'
      },
      {
        label: 'menu.experience.esperienza',
        link: 'esperienza'
      },
      {
        label: 'menu.experience.accademia',
        link: 'accademia'
      },
      {
        label: 'menu.experience.eventsHash',
        link: 'events'
      },
      {
        label: 'menu.experience.mobileApp',
        link: 'mobile-app'
      }
    ],
    children: [
      {
        label: 'menu.experience.news',
        route: '/events'
      },
      {
        label: 'menu.experience.events',
        route: '/events'
      },
      {
        label: 'menu.experience.museum',
        route: '/events'
      },
      {
        label: 'menu.experience.esperienzaPrograms',
        route: '/events'
      },
      {
        label: 'menu.experience.lounge',
        route: '/events'
      },
      {
        label: 'menu.experience.mobileApp',
        route: '/events'
      }
    ]
  },
  {
    label: 'menu.motorsport.title',
    route: '/',
    anchors: [
      {
        label: 'menu.motorsport.lamborghiniSuperTrofeo',
        link: 'lamborghini-super-trofeo'
      },
      {
        label: 'menu.motorsport.gt3',
        link: 'gt3'
      },
      {
        label: 'menu.experience.accademia',
        link: 'accademia'
      }
    ]
  },
  {
    label: 'menu.store.title',
    route: '/',
    anchors: [
      {
        label: 'menu.store.collection',
        link: 'collection'
      },
      {
        label: 'menu.experience.shopByCar',
        link: 'shop-by-car'
      }
    ]
  }
];
