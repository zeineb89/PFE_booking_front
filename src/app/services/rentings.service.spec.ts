import { TestBed } from '@angular/core/testing';

import { RentingsService } from './rentings.service';

describe('RentingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentingsService = TestBed.get(RentingsService);
    expect(service).toBeTruthy();
  });
});
