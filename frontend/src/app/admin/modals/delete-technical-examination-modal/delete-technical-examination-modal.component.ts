import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TechnicalExamination} from '../../../shared/model/technicalExamination/technical-examination';
import {TechnicalExaminationService} from '../../../shared/service/vehicle/technical-examination.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-technical-examination-modal',
  templateUrl: './delete-technical-examination-modal.component.html',
  styleUrls: ['./delete-technical-examination-modal.component.scss']
})
export class DeleteTechnicalExaminationModalComponent implements OnInit {

  @Input() technicalExamination: TechnicalExamination;
  @Output() technicalExaminationDeletionEmitter = new EventEmitter<string>();

  constructor(private technicalExaminationService: TechnicalExaminationService, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.technicalExaminationService
      .deleteTechnicalExamination(this.technicalExamination)
      .subscribe(response => {
        this.activeModal.close();
        this.technicalExaminationDeletionEmitter.emit('deleted');
      });
  }

  onCancel() {
    this.activeModal.close();
  }
}
