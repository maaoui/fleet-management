import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTechnicalExaminationComponent } from './admin-technical-examination.component';

describe('AdminTechnicalExaminationComponent', () => {
  let component: AdminTechnicalExaminationComponent;
  let fixture: ComponentFixture<AdminTechnicalExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTechnicalExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTechnicalExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
