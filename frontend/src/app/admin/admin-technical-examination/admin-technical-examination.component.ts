import {Component, OnInit} from '@angular/core';
import {TechnicalExamination} from '../../shared/model/technicalExamination/technical-examination';
import {TechnicalExaminationService} from '../../shared/service/vehicle/technical-examination.service';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {Constraint} from '../../shared/constraints/constraint';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteTechnicalExaminationModalComponent} from '../modals/delete-technical-examination-modal/delete-technical-examination-modal.component';
import {AddTechnicalExaminationModalComponent} from '../modals/add-technical-examination-modal/add-technical-examination-modal.component';

@Component({
  selector: 'app-admin-technical-examination',
  templateUrl: './admin-technical-examination.component.html',
  styleUrls: ['./admin-technical-examination.component.scss']
})
export class AdminTechnicalExaminationComponent implements OnInit {

  technicalExaminations: TechnicalExamination[];

  constructor(private technicalExaminationService: TechnicalExaminationService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.initializeTechnicalExaminations();
  }

  openAddTechnicalExaminationModal() {
    const modalRef = this.modalService.open(AddTechnicalExaminationModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.technicalExamination = new TechnicalExamination();
    modalRef.componentInstance
      .postTechnicalExaminationEmitter
      .subscribe((technicalExamination: TechnicalExamination) => {
        this.technicalExaminations = [...this.technicalExaminations, technicalExamination];
      });
  }

  openDeleteTechnicalExaminationModal(technicalExamination: TechnicalExamination) {
    const modalRef = this.modalService.open(DeleteTechnicalExaminationModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.technicalExamination = {...technicalExamination};
    modalRef.componentInstance.technicalExaminationDeletionEmitter.subscribe(() => this.initializeTechnicalExaminations());
  }

  getVehicleDescription(vehicle: Vehicle): string {
    return `${vehicle.make} ${vehicle.model} [ ${vehicle.plateNumber} ]`;
  }

  private initializeTechnicalExaminations() {
    this.technicalExaminationService
      .getAllTechnicalExaminations()
      .subscribe((technicalExaminations: TechnicalExamination[]) => this.technicalExaminations =  technicalExaminations);
  }
}
