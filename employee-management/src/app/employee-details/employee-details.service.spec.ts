/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeDetailsService } from './employee-details.service';

describe('Service: EmployeeDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDetailsService]
    });
  });

  it('should ...', inject([EmployeeDetailsService], (service: EmployeeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
