import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {VehicleService} from '../../shared/service/vehicle/vehicle.service';
import {Constraint} from '../../shared/constraints/constraint';
import {InsuranceService} from '../../shared/service/insurance/insurance.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReadInsuranceInformationModalComponent} from '../modals/read-insurance-information-modal/read-insurance-information-modal.component';

@Component({
  selector: 'app-employee-vehicles',
  templateUrl: './employee-vehicles.component.html',
  styleUrls: ['./employee-vehicles.component.scss']
})
export class EmployeeVehiclesComponent implements OnInit {
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService, private insuranceService: InsuranceService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadVehiclesList();
  }

  loadVehiclesList() {
    this.vehicleService
      .getVehiclesList()
      .subscribe((vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
      });
  }

  openInsuranceInformationModal(vehicle: Vehicle) {
    this.insuranceService
      .getInsuranceByVehicleId(vehicle.id)
      .subscribe((insurance) => {
        const modalRef = this.modalService.open(ReadInsuranceInformationModalComponent, {size: Constraint.MODAL_SIZE_LG});
        modalRef.componentInstance.insurance = insurance;
      });
  }
}
