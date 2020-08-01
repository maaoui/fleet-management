import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalExaminationComponent } from './technical-examination.component';

describe('TechnicalExaminationComponent', () => {
  let component: TechnicalExaminationComponent;
  let fixture: ComponentFixture<TechnicalExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
