import { TestBed } from '@angular/core/testing';

import { EmpserService } from './empser.service';

describe('EmpserService', () => {
  let service: EmpserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
