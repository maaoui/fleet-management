import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Insurance} from '../../../shared/model/insurance/insurance';
import {InsuranceService} from '../../../shared/service/insurance/insurance.service';

@Component({
  selector: 'app-insurance-information',
  templateUrl: './insurance-information.component.html',
  styleUrls: ['./insurance-information.component.scss']
})
export class InsuranceInformationComponent implements OnInit {

  @Input() insurance: Insurance;
  private isEditMode = false;

  constructor(public activeModal: NgbActiveModal, private insuranceService: InsuranceService) {
  }

  ngOnInit(): void {
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onEditPress() {
    this.isEditMode = !this.isEditMode;
  }

  onSavePress() {
    this.insuranceService
      .updateInsurance(this.insurance)
      .subscribe(insurance => {
        this.activeModal.close();
      });
  }
}
