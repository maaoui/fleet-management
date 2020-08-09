import {Component, OnInit} from '@angular/core';
import {TechnicalExamination} from '../../shared/model/technicalExamination/technical-examination';
import {TechnicalExaminationService} from '../../shared/service/vehicle/technical-examination.service';
import {ToastService} from '../../shared/service/toast/toast.service';

@Component({
  selector: 'app-admin-technical-examination',
  templateUrl: './admin-technical-examination.component.html',
  styleUrls: ['./admin-technical-examination.component.scss']
})
export class AdminTechnicalExaminationComponent implements OnInit {

  technicalExaminations: TechnicalExamination[];

  constructor(private technicalExaminationService: TechnicalExaminationService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.initializeTechnicalExaminations();
  }

  private initializeTechnicalExaminations() {
    this.technicalExaminationService
      .getAllTechnicalExaminations()
      .subscribe(
        (technicalExaminations: TechnicalExamination[]) => this.technicalExaminations = technicalExaminations,
        () => this.toastService.showFetchingFailed()
      );
  }
}
