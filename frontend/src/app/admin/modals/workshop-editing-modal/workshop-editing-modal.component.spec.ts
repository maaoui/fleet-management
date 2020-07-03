import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopEditingModalComponent } from './workshop-editing-modal.component';

describe('WorkshopEditingModalComponent', () => {
  let component: WorkshopEditingModalComponent;
  let fixture: ComponentFixture<WorkshopEditingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopEditingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopEditingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
