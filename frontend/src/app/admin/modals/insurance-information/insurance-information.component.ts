import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Insurance} from '../../../shared/model/insurance/insurance';
import {InsuranceService} from '../../../shared/service/insurance/insurance.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {InsuranceValidatorConstants} from '../../../core/constants/validator-constants';

@Component({
  selector: 'app-insurance-information',
  templateUrl: './insurance-information.component.html',
  styleUrls: ['./insurance-information.component.scss']
})
export class InsuranceInformationComponent implements OnInit {

  @Input() insurance: Insurance;
  @Output() insuranceUpdateEmitter: EventEmitter<Insurance> = new EventEmitter<Insurance>();
  private isEditMode = false;
  private insuranceForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private insuranceService: InsuranceService) {
  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onEditPress() {
    this.isEditMode = !this.isEditMode;
    this.initializeFormGroup();
  }

  onSavePress() {
    const editedVehicle = new Insurance({
      id: this.insuranceForm.controls.id.value,
      vehicle: this.insurance.vehicle,
      companyName: this.insuranceForm.controls.companyName.value,
      contactNumber: this.insuranceForm.controls.contactNumber.value,
      insuranceNumber: this.insuranceForm.controls.insuranceNumber.value,
      startDate: this.formatDate(this.insuranceForm.controls.startDate.value),
      endDate: this.formatDate(this.insuranceForm.controls.endDate.value),
    });

    this.insuranceService
      .updateInsurance(editedVehicle)
      .subscribe(insurance => {
        this.insuranceUpdateEmitter.emit(insurance);
        this.activeModal.close();
      });
  }

  private initializeFormGroup() {
    this.insuranceForm = new FormGroup({
      id: new FormControl(this.insurance.id),
      insuranceNumber: new FormControl(this.insurance.insuranceNumber,
        Validators.compose([
          Validators.min(InsuranceValidatorConstants.COMPANY_NAME_MIN_LENGTH),
          Validators.max(InsuranceValidatorConstants.COMPANY_NAME_MAX_LENGTH)
        ])),
      companyName: new FormControl(this.insurance.companyName,
        Validators.compose([
          Validators.min(InsuranceValidatorConstants.COMPANY_NAME_MIN_LENGTH),
          Validators.max(InsuranceValidatorConstants.COMPANY_NAME_MAX_LENGTH)
        ])),
      contactNumber: new FormControl(this.insurance.contactNumber,
        Validators.compose([
          Validators.pattern(InsuranceValidatorConstants.PHONE_NUMBER_PATTERN)
        ])),
      startDate: new FormControl(this.insurance.startDate),
      endDate: new FormControl(this.insurance.endDate),
    });
  }

  private formatDate(date) {
    return moment(date).toDate();
  }
}
