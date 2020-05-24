import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesNotFoundComponent } from './expenses-not-found.component';

describe('ExpensesNotFoundComponent', () => {
  let component: ExpensesNotFoundComponent;
  let fixture: ComponentFixture<ExpensesNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
