import { PLATFORM_ID } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { RESPONSIVE_MODE_DEFAULT } from '../responsive.common';
import { RESPONSIVE_MODE } from '../responsive.tokens';
import { BaseResponsiveService } from './base-responsive.service';

describe('ResponsiveService', () => {
  let service: ResponsiveService;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
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
    service = TestBed.inject(ResponsiveService);
  });

  it('should be created', () => {
    expect(ResponsiveService).toBeTruthy();
  });

  it('isMobile() should check is that mobile', () => {
    expect(service.isMobile(320)).toBeTruthy();
    expect(service.isMobile(480)).toBeTruthy();
    expect(service.isMobile(720)).toBeTruthy();
    expect(service.isMobile(767)).toBeTruthy();
    expect(service.isMobile(768)).toBeFalsy();
    expect(service.isMobile(920)).toBeFalsy();
    expect(service.isMobile(1024)).toBeFalsy();
  });

  it('getResponsiveTypeByWidth() should return responsive type by email', () => {
    expect(service.getResponsiveTypeByWidth(RESPONSIVE_MODE_DEFAULT.sizes.xs)).toBe('xs');
    expect(service.getResponsiveTypeByWidth(333)).toBe('nm');
    expect(service.getResponsiveTypeByWidth(RESPONSIVE_MODE_DEFAULT.sizes.md)).toBe('md');
    expect(service.getResponsiveTypeByWidth(790)).toBe('md');
    expect(service.getResponsiveTypeByWidth(RESPONSIVE_MODE_DEFAULT.sizes.zh)).toBe('zh');
    expect(service.getResponsiveTypeByWidth(1700)).toBe('zh');
  });

  it('checkBetween() should check is that between responsive types', () => {
    expect(service.checkBetween('md', ['md'])).toBeFalsy();
    expect(service.checkBetween('md', ['sm,lg'])).toBeTruthy();
    expect(service.checkBetween('lg', ['lg,xl'])).toBeTruthy();
    expect(service.checkBetween('lg', ['xl,zh'])).toBeFalsy();
  });

  it('checkEqual() should check is that equal responsive type', () => {
    expect(service.checkEqual('md', ['md'])).toBeTruthy();
    expect(service.checkEqual('md', ['sm'])).toBeFalsy();
    expect(service.checkEqual('md', ['sm,md'])).toBeFalsy();
    expect(service.checkEqual('md', ['sm,md', 'md'])).toBeTruthy();
    expect(service.checkEqual('md', ['md', 'sm,md'])).toBeTruthy();
    expect(service.checkEqual('md', ['lg', 'sm,md'])).toBeFalsy();
  });

  it('checkMin() should check is that more responsive types', () => {
    expect(service.checkMin('md', ['sm'])).toBeTruthy();
    expect(service.checkMin('md', ['md'])).toBeTruthy();
    expect(service.checkMin('md', ['lg'])).toBeFalsy();

    expect(service.checkMin('md', ['lg', 'md'])).toBeTruthy();
    expect(service.checkMin('sm', ['lg', 'md'])).toBeFalsy();
  });

  it('checkMax() should check is that less responsive types', () => {
    expect(service.checkMax('md', ['lg'])).toBeTruthy();
    expect(service.checkMax('md', ['md'])).toBeFalsy();
    expect(service.checkMax('md', ['sm'])).toBeFalsy();

    expect(service.checkMax('md', ['lg', 'md'])).toBeTruthy();
    expect(service.checkMax('md', ['lg', 'zh'])).toBeTruthy();
    expect(service.checkMax('zh', ['lg', 'zh'])).toBeFalsy();
  });
});
