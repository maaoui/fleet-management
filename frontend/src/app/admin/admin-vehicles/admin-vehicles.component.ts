import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/model/vehicle';
import {VehicleService} from '../../shared/service/vehicle.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditVehicleModalComponent} from '../modals/edit-vehicle-modal/edit-vehicle-modal.component';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-admin-vehicles',
  templateUrl: './admin-vehicles.component.html',
  styleUrls: ['./admin-vehicles.component.scss']
})
export class AdminVehiclesComponent implements OnInit {
  private vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadVehiclesList();
  }

  private loadVehiclesList() {
    this
      .vehicleService
      .getVehiclesList()
      .subscribe(
        (vehicles) => {
          this.vehicles = vehicles;
          console.log(vehicles);
        },
        (error) => {
          // TODO Handle error - show error message
        }
      );
  }

  openEditVehicleModal(vehicle: Vehicle) {
    const modalRef = this.modalService.open(EditVehicleModalComponent);
    modalRef.componentInstance.vehicle = vehicle;
  }
}
