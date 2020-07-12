import { TestBed } from '@angular/core/testing';

import { TechnicalExaminationService } from './technical-examination.service';

describe('TechincalExaminationService', () => {
  let service: TechnicalExaminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalExaminationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
