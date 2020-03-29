import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminExpensesComponent} from './admin-expenses.component';

describe('AdminExpensesComponent', () => {
  let component: AdminExpensesComponent;
  let fixture: ComponentFixture<AdminExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExpensesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
