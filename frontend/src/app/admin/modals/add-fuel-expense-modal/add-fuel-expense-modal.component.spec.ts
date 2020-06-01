import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuelExpenseModalComponent } from './add-fuel-expense-modal.component';

describe('AddFuelExpenseModalComponent', () => {
  let component: AddFuelExpenseModalComponent;
  let fixture: ComponentFixture<AddFuelExpenseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuelExpenseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuelExpenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
