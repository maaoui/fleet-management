import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {VehicleService} from '../../../shared/service/vehicle/vehicle.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleValidatorConstants} from '../../../core/constants/validator-constants';
import {EmployeeService} from '../../../shared/service/employee/employee.service';
import {Employee} from '../../../shared/model/employee/employee';
import * as moment from 'moment';
import {FuelType} from '../../../shared/model/enums/fuel-type.enum';

@Component({
  selector: 'app-edit-vehicle-modal',
  templateUrl: './edit-vehicle-modal.component.html',
  styleUrls: ['./edit-vehicle-modal.component.scss']
})
export class EditVehicleModalComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() vehicleUpdateEmitter = new EventEmitter<string>();
  private vehicleForm: FormGroup;
  private employees: Employee[];
  private typesOfFuel = Object.values(FuelType);

  constructor(public activeModal: NgbActiveModal,
              private vehicleService: VehicleService,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.initializeFormGroup();
    this.initializeEmployees();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  private extractDateFromTimePicker(date: NgbDate): Date {
    const newDate = moment(date);
    newDate.subtract(1, 'month');
    newDate.add(12, 'hour');
    return newDate.toDate();
  }

  onSavePress() {
    const editedVehicle = new Vehicle({
      id: this.vehicle.id,
      plateNumber: this.vehicleForm.controls.plateNumber.value,
      make: this.vehicleForm.controls.make.value,
      model: this.vehicleForm.controls.model.value,
      horsePower: this.vehicleForm.controls.horsePower.value,
      vin: this.vehicleForm.controls.vin.value,
      firstRegistration: this.extractDateFromTimePicker(this.vehicleForm.controls.firstRegistration.value),
      yearOfProduction: this.vehicleForm.controls.yearOfProduction.value,
      weight: this.vehicleForm.controls.weight.value,
      currentEmployee: this.vehicleForm.controls.currentEmployee.value,
      fuelType: this.vehicleForm.controls.fuelType.value
    });
    this.vehicleService
      .updateVehicle(editedVehicle)
      .subscribe((vehicle) => {
          this.activeModal.close();
          this.vehicleUpdateEmitter.emit('updated');
        },
        error => {
          // TODO Show error response
        });
  }

  private initializeFormGroup() {
    return this.vehicleForm = new FormGroup({
      id: new FormControl(this.vehicle.id),
      plateNumber: new FormControl(this.vehicle.plateNumber,
        Validators.compose([
          Validators.minLength(VehicleValidatorConstants.MIN_FIELD_LENGTH),
          Validators.maxLength(VehicleValidatorConstants.REGISTER_PLATE_MAX_LENGTH)
        ])),
      make: new FormControl(this.vehicle.make,
        Validators.compose([
          Validators.minLength(VehicleValidatorConstants.MIN_FIELD_LENGTH),
          Validators.maxLength(VehicleValidatorConstants.MAKE_MAX_LENGTH)
        ])),
      model: new FormControl(this.vehicle.model,
        Validators.compose([
          Validators.minLength(VehicleValidatorConstants.MIN_FIELD_LENGTH),
          Validators.maxLength(VehicleValidatorConstants.MODEL_MAX_LENGTH)
        ])),
      horsePower: new FormControl(this.vehicle.horsePower,
        Validators.compose([
          Validators.min(VehicleValidatorConstants.HORSE_POWER_MIN_VALUE),
          Validators.max(VehicleValidatorConstants.HORSE_POWER_MAX_VALUE)
        ])),
      vin: new FormControl(this.vehicle.vin,
        Validators.compose([
          Validators.minLength(VehicleValidatorConstants.MIN_FIELD_LENGTH),
          Validators.maxLength(VehicleValidatorConstants.VIN_MAX_LENGTH)
        ])),
      firstRegistration: new FormControl(this.vehicle.firstRegistration,
        Validators.compose([
          Validators.required
        ])),
      yearOfProduction: new FormControl(this.vehicle.yearOfProduction,
        Validators.compose([
          Validators.required,
          Validators.min(VehicleValidatorConstants.YEAR_OF_PRODUCTION_MIN_VALUE)
        ])),
      weight: new FormControl(this.vehicle.weight,
        Validators.compose([
          Validators.min(VehicleValidatorConstants.WEIGHT_MIN_VALUE),
        ])),
      fuelType: new FormControl(this.vehicle.fuelType,
        Validators.compose([
          Validators.required,
        ])),
      currentEmployee: new FormControl(this.vehicle.currentEmployee)
    });
  }

  private initializeEmployees() {
    this.employeeService
      .getEmployeeList()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }
}
