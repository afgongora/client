import { TestBed } from '@angular/core/testing';

import { ReservatourService } from './reservatour.service';

describe('ReservatourService', () => {
  let service: ReservatourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservatourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
