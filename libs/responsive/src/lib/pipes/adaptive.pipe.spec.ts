import { PLATFORM_ID } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler, hot } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { ResponsiveFacade } from '../+state/responsive.facade';
import { AdaptiveMode } from '../interfaces/adaptive.interface';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { RESPONSIVE_MODE_DEFAULT } from '../responsive.common';
import { RESPONSIVE_MODE } from '../responsive.tokens';
import { BaseResponsiveService } from '../services/base-responsive.service';
import { AdaptivePipe } from './adaptive.pipe';
import { ResponsiveStorage } from '@medium-stories/responsive';

describe('AdaptivePipe', () => {
  let pipe: AdaptivePipe;
  let facade: ResponsiveFacade;
  let scheduler: TestScheduler;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        AdaptivePipe,
        {
          provide: ResponsiveService,
          useClass: BaseResponsiveService
        },
        {
          provide: ResponsiveStorage,
          useValue: {}
        },
        {
          provide: ResponsiveFacade,
          useValue: {
            responsiveType$: of()
          }
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
    pipe = TestBed.inject(AdaptivePipe);
    facade = TestBed.inject(ResponsiveFacade);
    scheduler = getTestScheduler();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct check with default mode', () => {
    facade.responsiveType$ = hot('^a', { a: 'zh' });
    let expected = cold('-b', { b: false });
    expect(pipe.transform('md')).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'zh' });
    expected = cold('--b', { b: true });
    expect(pipe.transform('zh')).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'zh' });
    expected = cold('---b', { b: true });
    expect(pipe.transform('zh|md')).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'zh' });
    expected = cold('----b', { b: false });
    expect(pipe.transform('sm|md')).toBeObservable(expected);
  });

  it('should return correct check with min mode', () => {
    facade.responsiveType$ = hot('^a', { a: 'zh' });
    let expected = cold('-b', { b: true });
    expect(pipe.transform('md', AdaptiveMode.Min)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'sm' });
    expected = cold('--b', { b: false });
    expect(pipe.transform('md', AdaptiveMode.Min)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'md' });
    expected = cold('---b', { b: true });
    expect(pipe.transform('md', AdaptiveMode.Min)).toBeObservable(expected);
  });

  it('should return correct check with max mode', () => {
    facade.responsiveType$ = hot('^a', { a: 'md' });
    let expected = cold('-b', { b: false });
    expect(pipe.transform('md', AdaptiveMode.Max)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'sm' });
    expected = cold('--b', { b: true });
    expect(pipe.transform('md', AdaptiveMode.Max)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'hg' });
    expected = cold('---b', { b: false });
    expect(pipe.transform('md', AdaptiveMode.Max)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'hg' });
    expected = cold('----b', { b: false });
    expect(pipe.transform('md|hg', AdaptiveMode.Max)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'xl' });
    expected = cold('-----b', { b: true });
    expect(pipe.transform('md|hg', AdaptiveMode.Max)).toBeObservable(expected);
  });

  it('should return correct check with between mode', () => {
    facade.responsiveType$ = hot('^a', { a: 'md' });
    let expected = cold('-b', { b: true });
    expect(pipe.transform('md,lg', AdaptiveMode.Between)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'sm' });
    expected = cold('--b', { b: false });
    expect(pipe.transform('lg,xl', AdaptiveMode.Between)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'hg' });
    expected = cold('---b', { b: false });
    expect(pipe.transform('xs,sm|lg,hg', AdaptiveMode.Between)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'xs' });
    expected = cold('----b', { b: true });
    expect(pipe.transform('xs,sm|lg,hg', AdaptiveMode.Between)).toBeObservable(expected);

    facade.responsiveType$ = hot('^a', { a: 'xs' });
    expected = cold('-----b', { b: false });
    expect(pipe.transform('sm,md|lg,hg', AdaptiveMode.Between)).toBeObservable(expected);
  });
});
