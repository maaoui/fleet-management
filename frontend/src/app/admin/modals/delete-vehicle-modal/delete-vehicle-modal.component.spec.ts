import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVehicleModalComponent } from './delete-vehicle-modal.component';

describe('DeleteVehicleModalComponent', () => {
  let component: DeleteVehicleModalComponent;
  let fixture: ComponentFixture<DeleteVehicleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVehicleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVehicleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
