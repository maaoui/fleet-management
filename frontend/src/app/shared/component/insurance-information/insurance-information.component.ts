import {Component, Input, OnInit} from '@angular/core';
import {Insurance} from '../../model/insurance/insurance';

@Component({
  selector: 'app-insurance-information',
  templateUrl: './insurance-information.component.html',
  styleUrls: ['./insurance-information.component.scss']
})
export class InsuranceInformationComponent implements OnInit {
  @Input() insurance: Insurance;

  constructor() {
  }

  ngOnInit(): void {
  }

}
