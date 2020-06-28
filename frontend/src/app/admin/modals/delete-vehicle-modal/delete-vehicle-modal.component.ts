import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehicleService} from '../../../shared/service/vehicle/vehicle.service';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-vehicle-modal',
  templateUrl: './delete-vehicle-modal.component.html',
  styleUrls: ['./delete-vehicle-modal.component.scss']
})
export class DeleteVehicleModalComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() departmentDeletionEmitter = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {

  }

  onDelete() {
    this.vehicleService
      .deleteVehicleById(this.vehicle.id)
      .subscribe(response => {
        this.activeModal.close();
        this.departmentDeletionEmitter.emit('updated');
      });
  }

  onCancel() {
    this.activeModal.close();
  }
}
