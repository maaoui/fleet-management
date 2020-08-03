import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TechnicalExamination} from '../../model/technicalExamination/technical-examination';
import {TechnicalExaminationService} from '../../service/vehicle/technical-examination.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTechnicalExaminationModalComponent} from '../../../admin/modals/add-technical-examination-modal/add-technical-examination-modal.component';
import {Constants} from '../../constants/constants';
import {DeleteTechnicalExaminationModalComponent} from '../../../admin/modals/delete-technical-examination-modal/delete-technical-examination-modal.component';
import {Vehicle} from '../../model/vehicle/vehicle';

@Component({
  selector: 'app-technical-examination',
  templateUrl: './technical-examination.component.html',
  styleUrls: ['./technical-examination.component.scss']
})
export class TechnicalExaminationComponent implements OnInit {

  @Input() technicalExaminations: TechnicalExamination[];
  @Input() private readonly canDeleteTechnicalExaminations = false;

  @Output() deleteTechnicalExaminationEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private technicalExaminationService: TechnicalExaminationService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openAddTechnicalExaminationModal() {
    const modalRef = this.modalService.open(AddTechnicalExaminationModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.technicalExamination = new TechnicalExamination();
    modalRef.componentInstance
      .postTechnicalExaminationEmitter
      .subscribe((technicalExamination: TechnicalExamination) => {
        this.technicalExaminations = [...this.technicalExaminations, technicalExamination];
      });
  }

  openDeleteTechnicalExaminationModal(technicalExamination: TechnicalExamination) {
    if (this.canDeleteTechnicalExaminations) {
      const modalRef = this.modalService.open(DeleteTechnicalExaminationModalComponent, {size: Constants.MODAL_SIZE_LG});
      modalRef.componentInstance.technicalExamination = {...technicalExamination};
      modalRef
        .componentInstance
        .technicalExaminationDeletionEmitter
        .subscribe(() => this.deleteTechnicalExaminationEmitter.emit('deleted'));
    }
  }

  getVehicleDescription(vehicle: Vehicle): string {
    return `${vehicle.make} ${vehicle.model} [ ${vehicle.plateNumber} ]`;
  }

}
