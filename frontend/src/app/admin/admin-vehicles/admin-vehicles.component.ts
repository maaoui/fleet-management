import {Component, OnDestroy, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {VehicleService} from '../../shared/service/vehicle/vehicle.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditVehicleModalComponent} from '../modals/edit-vehicle-modal/edit-vehicle-modal.component';
import {InsuranceInformationComponent} from '../modals/insurance-information/insurance-information.component';
import {Subscription} from 'rxjs';
import {InsuranceService} from '../../shared/service/insurance/insurance.service';
import {DeleteVehicleModalComponent} from '../modals/delete-vehicle-modal/delete-vehicle-modal.component';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-admin-vehicles',
  templateUrl: './admin-vehicles.component.html',
  styleUrls: ['./admin-vehicles.component.scss']
})
export class AdminVehiclesComponent implements OnInit, OnDestroy {
  private vehicles: Vehicle[];
  private subscription: Subscription;

  constructor(private vehicleService: VehicleService, private modalService: NgbModal, private insuranceService: InsuranceService) {
  }

  ngOnInit(): void {
    this.loadVehiclesList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadVehiclesList() {
    this.subscription = this
      .vehicleService
      .getVehiclesList()
      .subscribe(
        (vehicles) => {
          this.vehicles = vehicles.sort((a: Vehicle, b: Vehicle) => a.id > b.id ? 1 : 0);
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

  openInsuranceInformationModal(vehicle: Vehicle) {
    this.subscription = this.insuranceService
      .getInsuranceByVehicleId(vehicle.id)
      .subscribe((insurance) => {
        const modalRef = this.modalService.open(InsuranceInformationComponent);
        modalRef.componentInstance.insurance = insurance;
        modalRef.componentInstance
          .vehicleUpdateEmitter
          .pipe(first())
          .subscribe(() => this.loadVehiclesList());
      }, error => {
        // TODO Handle error - show error message
      });
  }

  openDeleteVehicleModal(vehicle: Vehicle) {
    const modalRef = this.modalService
      .open(DeleteVehicleModalComponent);
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.componentInstance
      .vehicleDeletionEmitter
      .pipe(first())
      .subscribe(() => this.loadVehiclesList());
  }
}
