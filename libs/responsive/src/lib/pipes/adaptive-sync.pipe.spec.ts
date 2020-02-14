import { PLATFORM_ID } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { AdaptiveMode } from '../interfaces/adaptive.interface';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { RESPONSIVE_MODE_DEFAULT } from '../responsive.common';
import { RESPONSIVE_MODE } from '../responsive.tokens';
import { BaseResponsiveService } from '../services/base-responsive.service';
import { AdaptiveSyncPipe } from './adaptive-sync.pipe';

describe('AdaptiveSyncPipe', () => {
  let pipe: AdaptiveSyncPipe;
  let storage: ResponsiveStorage;
  const createProps = size => jest.fn(() => ({ responsiveType: size } as any));

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        AdaptiveSyncPipe,
        {
          provide: ResponsiveService,
          useClass: BaseResponsiveService
        },
        {
          provide: ResponsiveStorage,
          useValue: {
            getProperties: jest.fn(),
            removeProperties: jest.fn(),
            setProperties: jest.fn()
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
    pipe = TestBed.inject(AdaptiveSyncPipe);
    storage = TestBed.inject(ResponsiveStorage);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct check with default mode', () => {
    storage.getProperties = createProps('zh');
    expect(pipe.transform('md')).toBeFalsy();
    storage.getProperties = createProps('zh');
    expect(pipe.transform('zh')).toBeTruthy();
    storage.getProperties = createProps('zh');
    expect(pipe.transform('zh|md')).toBeTruthy();
    storage.getProperties = createProps('zh');
    expect(pipe.transform('sm|md')).toBeFalsy();
  });

  it('should return correct check with min mode', () => {
    storage.getProperties = createProps('zh');
    expect(pipe.transform('md', AdaptiveMode.Min)).toBeTruthy();
    storage.getProperties = createProps('sm');
    expect(pipe.transform('md', AdaptiveMode.Min)).toBeFalsy();
    storage.getProperties = createProps('md');
    expect(pipe.transform('md', AdaptiveMode.Min)).toBeTruthy();
  });

  it('should return correct check with max mode', () => {
    storage.getProperties = createProps('md');
    expect(pipe.transform('md', AdaptiveMode.Max)).toBeFalsy();
    storage.getProperties = createProps('sm');
    expect(pipe.transform('md', AdaptiveMode.Max)).toBeTruthy();
    storage.getProperties = createProps('hg');
    expect(pipe.transform('md', AdaptiveMode.Max)).toBeFalsy();

    storage.getProperties = createProps('hg');
    expect(pipe.transform('md|hg', AdaptiveMode.Max)).toBeFalsy();
    storage.getProperties = createProps('xl');
    expect(pipe.transform('md|hg', AdaptiveMode.Max)).toBeTruthy();
  });

  it('should return correct check with between mode', () => {
    storage.getProperties = createProps('md');
    expect(pipe.transform('md,lg', AdaptiveMode.Between)).toBeTruthy();
    storage.getProperties = createProps('sm');
    expect(pipe.transform('lg,xl', AdaptiveMode.Between)).toBeFalsy();
    storage.getProperties = createProps('hg');
    expect(pipe.transform('xs,sm|lg,hg', AdaptiveMode.Between)).toBeFalsy();
    storage.getProperties = createProps('xs');
    expect(pipe.transform('xs,sm|lg,hg', AdaptiveMode.Between)).toBeTruthy();
    storage.getProperties = createProps('xs');
    expect(pipe.transform('sm,md|lg,hg', AdaptiveMode.Between)).toBeFalsy();
  });
});
