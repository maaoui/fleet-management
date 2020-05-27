import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopModalComponent } from './workshop-modal.component';

describe('WorkshopModalComponent', () => {
  let component: WorkshopModalComponent;
  let fixture: ComponentFixture<WorkshopModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
