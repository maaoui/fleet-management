import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTechnicalExaminationModalComponent } from './delete-technical-examination-modal.component';

describe('DeleteTechnicalExaminationModalComponent', () => {
  let component: DeleteTechnicalExaminationModalComponent;
  let fixture: ComponentFixture<DeleteTechnicalExaminationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTechnicalExaminationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTechnicalExaminationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
