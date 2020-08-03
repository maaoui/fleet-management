import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {VehicleService} from '../../shared/service/vehicle/vehicle.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditVehicleModalComponent} from '../modals/edit-vehicle-modal/edit-vehicle-modal.component';
import {Subscription} from 'rxjs';
import {DeleteVehicleModalComponent} from '../modals/delete-vehicle-modal/delete-vehicle-modal.component';
import {first} from 'rxjs/operators';
import {Constants} from '../../shared/constants/constants';
import {AddVehicleModalComponent} from '../modals/add-vehicle-modal/add-vehicle-modal.component';
import {Insurance} from '../../shared/model/insurance/insurance';
import {InsuranceInformationModalComponent} from '../modals/insurance-information-modal/insurance-information-modal.component';
import {InsuranceService} from '../../shared/service/insurance/insurance.service';

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
        },
        (error) => {
          // TODO Handle error - show error message
        }
      );
  }

  openEditVehicleModal(vehicle: Vehicle) {
    const modalRef = this.modalService.open(EditVehicleModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.componentInstance.vehicleUpdateEmitter = new EventEmitter();
    modalRef.componentInstance
      .vehicleUpdateEmitter
      .pipe(first())
      .subscribe(() => this.loadVehiclesList());
  }


  openDeleteVehicleModal(vehicle: Vehicle) {
    const modalRef = this.modalService
      .open(DeleteVehicleModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.componentInstance.vehicleDeletionEmitter = new EventEmitter();
    modalRef.componentInstance
      .vehicleDeletionEmitter
      .pipe(first())
      .subscribe(() => this.loadVehiclesList());
  }

  openAddVehicleModal() {
    const modalRef = this.modalService.open(AddVehicleModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.vehicle = new Vehicle({
      insurance: new Insurance()
    });
    modalRef.componentInstance.vehicleCreationEmitter = new EventEmitter();
    modalRef.componentInstance
      .vehicleCreationEmitter
      .pipe(first())
      .subscribe(() => this.loadVehiclesList());
  }

  openInsuranceInformationModal(vehicle: Vehicle) {
    this.insuranceService
      .getInsuranceByVehicleId(vehicle.id)
      .subscribe((insurance) => {
        const modalRef = this.modalService.open(InsuranceInformationModalComponent, {size: Constants.MODAL_SIZE_LG});
        modalRef.componentInstance.insurance = insurance;
        modalRef.componentInstance.insuranceUpdateEmitter = new EventEmitter();
        modalRef.componentInstance.insuranceUpdateEmitter
          .pipe(first())
          .subscribe(
            () => this.loadVehiclesList(),
            (error) => {
              // TODO Handle error - show error message
            });
      });
  }
}
