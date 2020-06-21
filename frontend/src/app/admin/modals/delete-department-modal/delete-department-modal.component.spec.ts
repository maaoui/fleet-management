import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepartmentModalComponent } from './delete-department-modal.component';

describe('DeleteDepartmentModalComponent', () => {
  let component: DeleteDepartmentModalComponent;
  let fixture: ComponentFixture<DeleteDepartmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDepartmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
