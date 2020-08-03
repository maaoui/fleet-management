import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {NgbActiveModal, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {VehicleService} from '../../../shared/service/vehicle/vehicle.service';
import {Employee} from '../../../shared/model/employee/employee';
import {EmployeeService} from '../../../shared/service/employee/employee.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {InsuranceValidatorConstants, VehicleValidatorConstants} from '../../../core/constants/validator-constants';
import {FuelType} from '../../../shared/model/enums/fuel-type.enum';
import {Insurance} from '../../../shared/model/insurance/insurance';


@Component({
  selector: 'app-add-vehicle-modal',
  templateUrl: './add-vehicle-modal.component.html',
  styleUrls: ['./add-vehicle-modal.component.scss']
})
export class AddVehicleModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private vehicleService: VehicleService,
              private employeeService: EmployeeService) {
  }

  @Input() vehicle: Vehicle;
  @Output() vehicleCreationEmitter = new EventEmitter<Vehicle>();
  private vehicleForm: FormGroup;
  private employees: Employee[];
  private typesOfFuel = Object.values(FuelType);

  private static extractDateFromTimePicker(date: NgbDate): Date {
    const newDate = moment(date);
    newDate.subtract(1, 'month');
    newDate.add(12, 'hour');
    return newDate.toDate();
  }

  ngOnInit(): void {
    this.initializeEmployees();
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const vehicleToCreate = new Vehicle({
      id: 0,
      plateNumber: this.vehicleForm.controls.plateNumber.value,
      make: this.vehicleForm.controls.make.value,
      model: this.vehicleForm.controls.model.value,
      horsePower: this.vehicleForm.controls.horsePower.value,
      vin: this.vehicleForm.controls.vin.value,
      firstRegistration: AddVehicleModalComponent.extractDateFromTimePicker(this.vehicleForm.controls.firstRegistration.value),
      yearOfProduction: this.vehicleForm.controls.yearOfProduction.value,
      weight: this.vehicleForm.controls.weight.value,
      currentEmployee: this.vehicleForm.controls.currentEmployee.value,
      fuelType: this.vehicleForm.controls.fuelType.value,
      insurance: new Insurance({
        ...this.vehicleForm.controls.insurance.value,
        startDate: this.formatDate(this.vehicleForm.controls.insurance.value.startDate),
        endDate: this.formatDate(this.vehicleForm.controls.insurance.value.startDate),
        id: 0
      })
    });

    this.vehicleService
      .createVehicle(vehicleToCreate)
      .subscribe((vehicle) => {
          this.activeModal.close();
          this.vehicleCreationEmitter.emit(vehicle);
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
          Validators.max(VehicleValidatorConstants.WEIGHT_MAX_VALUE),
        ])),
      fuelType: new FormControl(this.vehicle.fuelType,
        Validators.compose([
          Validators.required,
        ])),
      currentEmployee: new FormControl(this.vehicle.currentEmployee),
      insurance: new FormGroup({
        id: new FormControl(this.vehicle.insurance.id),
        insuranceNumber: new FormControl(this.vehicle.insurance.insuranceNumber,
          Validators.compose([
            Validators.min(InsuranceValidatorConstants.COMPANY_NAME_MIN_LENGTH),
            Validators.max(InsuranceValidatorConstants.COMPANY_NAME_MAX_LENGTH)
          ])),
        companyName: new FormControl(this.vehicle.insurance.companyName,
          Validators.compose([
            Validators.min(InsuranceValidatorConstants.COMPANY_NAME_MIN_LENGTH),
            Validators.max(InsuranceValidatorConstants.COMPANY_NAME_MAX_LENGTH)
          ])),
        contactNumber: new FormControl(this.vehicle.insurance.contactNumber,
          Validators.compose([
            Validators.pattern(InsuranceValidatorConstants.PHONE_NUMBER_PATTERN)
          ])),
        startDate: new FormControl(this.vehicle.insurance.startDate),
        endDate: new FormControl(this.vehicle.insurance.endDate),
      })
    });
  }

  private initializeEmployees() {
    this.employeeService
      .getEmployeeList()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }

  private formatDate(date) {
    return moment(date).toDate();
  }
}
