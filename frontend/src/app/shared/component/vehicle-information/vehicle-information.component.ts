import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from '../../model/vehicle/vehicle';
import {InsuranceInformationComponent} from '../../../admin/modals/insurance-information/insurance-information.component';
import {Constraint} from '../../constraints/constraint';
import {first} from 'rxjs/operators';
import {InsuranceService} from '../../service/insurance/insurance.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Insurance} from '../../model/insurance/insurance';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.scss']
})
export class VehicleInformationComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() eventEmitter: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  constructor(private insuranceService: InsuranceService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openInsuranceInformationModal(vehicle: Vehicle) {
    this.insuranceService
      .getInsuranceByVehicleId(vehicle.id)
      .subscribe((insurance) => {
        const modalRef = this.modalService.open(InsuranceInformationComponent, {size: Constraint.MODAL_SIZE_LG});
        modalRef.componentInstance.insurance = insurance;
        modalRef.componentInstance.insuranceUpdateEmitter = new EventEmitter();
        modalRef.componentInstance.insuranceUpdateEmitter
          .pipe(first())
          .subscribe((updatedInsurance: Insurance) => {
            this.eventEmitter.emit(
              new Vehicle({
                ...this.vehicle,
                insurance: updatedInsurance
              }));
          }, error => {
            // TODO Handle error - show error message
          });
      });
  }
}
