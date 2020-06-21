import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentModalComponent } from './add-department-modal.component';

describe('AddDepartmentModalComponent', () => {
  let component: AddDepartmentModalComponent;
  let fixture: ComponentFixture<AddDepartmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDepartmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
