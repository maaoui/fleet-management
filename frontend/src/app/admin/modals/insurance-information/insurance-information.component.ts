import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Insurance} from '../../../shared/model/insurance/insurance';
import {InsuranceService} from '../../../shared/service/insurance/insurance.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-insurance-information',
  templateUrl: './insurance-information.component.html',
  styleUrls: ['./insurance-information.component.scss']
})
export class InsuranceInformationComponent implements OnInit {

  @Input() insurance: Insurance;
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
        this.activeModal.close();
      });
  }

  private initializeFormGroup() {
    this.insuranceForm = new FormGroup({
      id: new FormControl(this.insurance.id),
      insuranceNumber: new FormControl(this.insurance.insuranceNumber,
        Validators.compose([
          Validators.min(0),
          Validators.max(100)
        ])),
      companyName: new FormControl(this.insurance.companyName,
        Validators.compose([
          Validators.min(0),
          Validators.max(100)
        ])),
      contactNumber: new FormControl(this.insurance.contactNumber,
        Validators.compose([
          Validators.pattern(this.getContactNumberPattern())
        ])),
      startDate: new FormControl(this.insurance.startDate),
      endDate: new FormControl(this.insurance.endDate),
    });
  }

  private getContactNumberPattern(): string {
    return '[1-9][0-9]{8}';
  }

  private formatDate(date) {
    return moment(date).toDate();
  }
}
