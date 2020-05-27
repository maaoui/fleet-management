import {Component, Input, OnInit} from '@angular/core';
import {Workshop} from '../../../shared/model/workshop/workshop';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workshop-modal',
  templateUrl: './workshop-modal.component.html',
  styleUrls: ['./workshop-modal.component.scss']
})
export class WorkshopModalComponent implements OnInit {
  @Input() workshop: Workshop;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onClosePress() {
    this.activeModal.close();
  }
}
