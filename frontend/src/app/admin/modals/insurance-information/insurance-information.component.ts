import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Insurance} from '../../../shared/model/insurance/insurance';

@Component({
  selector: 'app-insurance-information',
  templateUrl: './insurance-information.component.html',
  styleUrls: ['./insurance-information.component.scss']
})
export class InsuranceInformationComponent implements OnInit {

  @Input() insurance: Insurance;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onCancelPress() {
    this.activeModal.close();
  }
}
