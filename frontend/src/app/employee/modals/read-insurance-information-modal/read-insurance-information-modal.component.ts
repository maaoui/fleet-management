import {Component, Input, OnInit} from '@angular/core';
import {Insurance} from '../../../shared/model/insurance/insurance';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-read-insurance-information-modal',
  templateUrl: './read-insurance-information-modal.component.html',
  styleUrls: ['./read-insurance-information-modal.component.scss']
})
export class ReadInsuranceInformationModalComponent implements OnInit {

  @Input() insurance: Insurance;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onExitPress() {
    this.activeModal.close();
  }
}
