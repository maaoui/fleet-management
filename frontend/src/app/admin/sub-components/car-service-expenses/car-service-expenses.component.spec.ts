import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceExpensesComponent } from './car-service-expenses.component';

describe('CarServiceExpensesComponent', () => {
  let component: CarServiceExpensesComponent;
  let fixture: ComponentFixture<CarServiceExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServiceExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServiceExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
