import { TestBed } from '@angular/core/testing';

import { DeportesServiceService } from './deportes-service.service';

describe('DeportesServiceService', () => {
  let service: DeportesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeportesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
