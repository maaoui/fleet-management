import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {VehicleService} from '../../../shared/service/vehicle/vehicle.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-vehicle-modal',
  templateUrl: './edit-vehicle-modal.component.html',
  styleUrls: ['./edit-vehicle-modal.component.scss']
})
export class EditVehicleModalComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() vehicleUpdateEmitter;
  private vehicleForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const editedVehicle = new Vehicle({
      id: this.vehicle.id,
      plateNumber: this.vehicleForm.controls.plateNumber.value,
      make: this.vehicleForm.controls.make.value,
      model: this.vehicleForm.controls.model.value,
      horsePower: this.vehicleForm.controls.horsePower.value,
      vin: this.vehicleForm.controls.vin.value,
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
          Validators.minLength(this.getMinLength()),
          Validators.maxLength(this.getMaxPlateNumberLength())
        ])),
      make: new FormControl(this.vehicle.make,
        Validators.compose([
          Validators.minLength(this.getMinLength()),
          Validators.maxLength(this.getMaxMakeLength())
        ])),
      model: new FormControl(this.vehicle.model,
        Validators.compose([
          Validators.minLength(this.getMinLength()),
          Validators.maxLength(this.getMaxModelLength())
        ])),
      horsePower: new FormControl(this.vehicle.horsePower,
        Validators.compose([
          Validators.min(this.getMinHorsePowerValue()),
          Validators.max(this.getMaxHorsePowerValue())
        ])),
      vin: new FormControl(this.vehicle.vin,
        Validators.compose([
          Validators.minLength(this.getMinLength()),
          Validators.maxLength(this.getMaxVINLength())
        ])),
    });
  }

  private getMinLength(): number {
    return 1;
  }

  private getMaxPlateNumberLength(): number {
    return 10;
  }

  private getMaxMakeLength(): number {
    return 30;
  }

  private getMaxModelLength(): number {
    return 30;
  }

  private getMaxVINLength(): number {
    return 20;
  }

  private getMinHorsePowerValue(): number {
    return 0;
  }

  private getMaxHorsePowerValue(): number {
    return 500;
  }

}
