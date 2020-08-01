import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadInsuranceInformationModalComponent } from './read-insurance-information-modal.component';

describe('ReadInsuranceInformationModalComponent', () => {
  let component: ReadInsuranceInformationModalComponent;
  let fixture: ComponentFixture<ReadInsuranceInformationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadInsuranceInformationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadInsuranceInformationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
