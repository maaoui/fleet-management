import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarPartExpenseModalComponent } from './add-car-part-expense-modal.component';

describe('AddCarPartExpenseModalComponent', () => {
  let component: AddCarPartExpenseModalComponent;
  let fixture: ComponentFixture<AddCarPartExpenseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarPartExpenseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarPartExpenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
