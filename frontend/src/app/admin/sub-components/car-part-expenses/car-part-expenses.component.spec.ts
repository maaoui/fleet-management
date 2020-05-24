import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPartExpensesComponent } from './car-part-expenses.component';

describe('CarPartExpensesComponent', () => {
  let component: CarPartExpensesComponent;
  let fixture: ComponentFixture<CarPartExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPartExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPartExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
