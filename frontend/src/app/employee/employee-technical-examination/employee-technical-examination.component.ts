import {Component, OnInit} from '@angular/core';
import {TechnicalExamination} from '../../shared/model/technicalExamination/technical-examination';
import {TechnicalExaminationService} from '../../shared/service/vehicle/technical-examination.service';

@Component({
  selector: 'app-employee-technical-examination',
  templateUrl: './employee-technical-examination.component.html',
  styleUrls: ['./employee-technical-examination.component.scss']
})
export class EmployeeTechnicalExaminationComponent implements OnInit {

  technicalExaminations: TechnicalExamination[];

  constructor(private technicalExaminationService: TechnicalExaminationService) {
  }

  ngOnInit(): void {
    this.initializeTechnicalExaminations();
  }

  private initializeTechnicalExaminations() {
    this.technicalExaminationService
      .getAllTechnicalExaminations()
      .subscribe((technicalExaminations: TechnicalExamination[]) => this.technicalExaminations = technicalExaminations);
  }
}
