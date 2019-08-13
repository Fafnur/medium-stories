import { async, TestBed } from '@angular/core/testing';

import { CookieStorage, MemoryStorage } from '@medium-stories/storage';

import { responsivePropertiesStub } from '../../testing';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { BaseResponsiveStorage } from './base-responsive-storage.service';

describe('BaseResponsiveStorage', () => {
  let storage: ResponsiveStorage;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: ResponsiveStorage,
          useClass: BaseResponsiveStorage
        },
        {
          provide: CookieStorage,
          useClass: MemoryStorage
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    storage = TestBed.get(ResponsiveStorage);
  });

  it('should create', () => {
    expect(storage).toBeTruthy();
  });

  it('setProperties/getProperties should set and return properties', () => {
    storage.setProperties(responsivePropertiesStub);

    expect(storage.getProperties()).toEqual(responsivePropertiesStub);
  });

  it('removeProperties should set and return properties', () => {
    storage.setProperties(responsivePropertiesStub);
    storage.removeProperties();

    expect(storage.getProperties()).toEqual(storage['defaultProperties']);
  });
});
