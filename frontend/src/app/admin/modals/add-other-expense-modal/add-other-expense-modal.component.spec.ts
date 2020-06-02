import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherExpenseModalComponent } from './add-other-expense-modal.component';

describe('AddOtherExpenseModalComponent', () => {
  let component: AddOtherExpenseModalComponent;
  let fixture: ComponentFixture<AddOtherExpenseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOtherExpenseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherExpenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
