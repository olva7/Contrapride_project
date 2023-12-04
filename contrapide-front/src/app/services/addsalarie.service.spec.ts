import { TestBed } from '@angular/core/testing';

import { AddsalarieService } from './addsalarie.service';

describe('AddsalarieService', () => {
  let service: AddsalarieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddsalarieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
