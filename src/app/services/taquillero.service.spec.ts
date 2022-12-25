import { TestBed } from '@angular/core/testing';

import { TaquilleroService } from './taquillero.service';

describe('TaquilleroService', () => {
  let service: TaquilleroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaquilleroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
