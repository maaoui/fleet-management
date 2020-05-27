import {Component, Input, OnInit} from '@angular/core';
import {CarPart} from '../../../shared/model/vehicle/car-part';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-part-modal',
  templateUrl: './car-part-modal.component.html',
  styleUrls: ['./car-part-modal.component.scss']
})
export class CarPartModalComponent implements OnInit {

  @Input() carPart: CarPart;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onClosePress() {
    this.activeModal.close();
  }
}
