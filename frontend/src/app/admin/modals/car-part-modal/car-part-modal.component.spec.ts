import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPartModalComponent } from './car-part-modal.component';

describe('CarPartModalComponent', () => {
  let component: CarPartModalComponent;
  let fixture: ComponentFixture<CarPartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPartModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
