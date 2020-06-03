import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicingExpenseModalComponent } from './add-servicing-expense-modal.component';

describe('AddServicingExpenseModalComponent', () => {
  let component: AddServicingExpenseModalComponent;
  let fixture: ComponentFixture<AddServicingExpenseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicingExpenseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicingExpenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
