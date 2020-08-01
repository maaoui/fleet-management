import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceInformationModalComponent } from './insurance-information-modal.component';

describe('InsuranceInformationModalComponent', () => {
  let component: InsuranceInformationModalComponent;
  let fixture: ComponentFixture<InsuranceInformationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceInformationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceInformationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
