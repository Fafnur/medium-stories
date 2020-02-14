import { Component, PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler, hot, readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { ResponsiveFacade } from '../+state/responsive.facade';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { MsMobileDirective } from './ms-mobile.directive';
import { RESPONSIVE_MODE, RESPONSIVE_MODE_DEFAULT } from '@medium-stories/responsive';

@Component({
  template: `
    <h1>
      <span *msMobile>Text</span>
    </h1>
  `
})
export class TestMsComponent {}

describe('MsMobileDirective', () => {
  let component: TestMsComponent;
  let fixture: ComponentFixture<TestMsComponent>;
  let facade: ResponsiveFacade;
  let scheduler: TestScheduler;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [TestMsComponent, MsMobileDirective],
      providers: [
        {
          provide: ResponsiveFacade,
          useValue: {
            mobile$: of(true)
          }
        },
        {
          provide: ResponsiveStorage,
          useValue: {}
        },
        {
          provide: RESPONSIVE_MODE,
          useValue: RESPONSIVE_MODE_DEFAULT
        },
        {
          provide: PLATFORM_ID,
          useValue: 'browser'
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    facade = TestBed.inject(ResponsiveFacade);
    scheduler = getTestScheduler();
    fixture = TestBed.createComponent(TestMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init() should initialized language on app', async done => {
    try {
      const compiled = fixture.debugElement.nativeElement;
      await readFirst(facade.mobile$);
      expect(compiled.querySelector('h1').textContent).toContain('Text');
      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
