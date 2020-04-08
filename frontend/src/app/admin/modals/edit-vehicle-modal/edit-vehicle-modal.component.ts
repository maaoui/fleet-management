import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Vehicle} from '../../../shared/model/vehicle';
import {VehicleService} from '../../../shared/service/vehicle.service';

@Component({
  selector: 'app-edit-vehicle-modal',
  templateUrl: './edit-vehicle-modal.component.html',
  styleUrls: ['./edit-vehicle-modal.component.scss']
})
export class EditVehicleModalComponent implements OnInit {

  @Input() vehicle: Vehicle;

  constructor(public activeModal: NgbActiveModal, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
/*    this.vehicleService
      .patchVehicle(this.vehicle)
      .subscribe((vehicle) => {
          // TODO Show success
        },
        error => {
          // TODO Show error response
        });*/
  }
}
