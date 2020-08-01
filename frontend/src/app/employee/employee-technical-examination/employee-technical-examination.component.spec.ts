import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTechnicalExaminationComponent } from './employee-technical-examination.component';

describe('EmployeeTechnicalExaminationComponent', () => {
  let component: EmployeeTechnicalExaminationComponent;
  let fixture: ComponentFixture<EmployeeTechnicalExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTechnicalExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTechnicalExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
