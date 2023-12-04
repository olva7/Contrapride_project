import { TestBed } from '@angular/core/testing';

import { SalarierService } from './salarier.service';

describe('SalarierService', () => {
  let service: SalarierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalarierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
