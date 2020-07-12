import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnicalExaminationModalComponent } from './add-technical-examination-modal.component';

describe('AddTechnicalExaminationModalComponent', () => {
  let component: AddTechnicalExaminationModalComponent;
  let fixture: ComponentFixture<AddTechnicalExaminationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTechnicalExaminationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnicalExaminationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
