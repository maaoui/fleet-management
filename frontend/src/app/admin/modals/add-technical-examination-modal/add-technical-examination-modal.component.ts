import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TechnicalExamination} from '../../../shared/model/technicalExamination/technical-examination';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {VehicleService} from '../../../shared/service/vehicle/vehicle.service';
import {TechnicalExaminationService} from '../../../shared/service/vehicle/technical-examination.service';
import {TechnicalExaminationValidatorConstants} from '../../../core/constants/validator-constants';
import {OtherExpenseService} from '../../../shared/service/exploitation/expense/other-expense.service';
import {OtherExpense} from '../../../shared/model/expense/other-expense';
import {ExaminationExpenseConstants} from '../../../core/constants/examination-expense-constants';

@Component({
  selector: 'app-add-technical-examination-modal',
  templateUrl: './add-technical-examination-modal.component.html',
  styleUrls: ['./add-technical-examination-modal.component.scss']
})
export class AddTechnicalExaminationModalComponent implements OnInit {

  @Output() postTechnicalExaminationEmitter = new EventEmitter<TechnicalExamination>();

  private vehicles: Vehicle[];
  private technicalExaminationForm: FormGroup;
  private technicalExamination: TechnicalExamination;
  private saveAsOtherExpense = false;

  constructor(public activeModal: NgbActiveModal,
              private technicalExaminationService: TechnicalExaminationService,
              private vehicleService: VehicleService,
              private otherExpenseService: OtherExpenseService
  ) {
  }


  ngOnInit(): void {
    this.initializeData();
  }

  onSavePress() {
    const examinationDate = new Date(Object.values(this.technicalExaminationForm.value.examinationDate).join('-'));
    const nextExaminationDate = new Date(Object.values(this.technicalExaminationForm.value.nextExaminationDate).join('-'));
    const technicalExamination = new TechnicalExamination({
      ...this.technicalExaminationForm.value,
      examinationDate,
      nextExaminationDate
    });
    this.technicalExaminationService
      .createTechnicalExamination(technicalExamination)
      .subscribe((updatedTechnicalExamination: TechnicalExamination) => {
          if (this.saveAsOtherExpense) {
            this.saveUpdatedTechnicalExaminationAsOtherExpense(updatedTechnicalExamination);
          }
          this.postTechnicalExaminationEmitter.emit(updatedTechnicalExamination);
          this.activeModal.close();
        },
        (errorMessage) => {
          // TODO Handle error message
        }
      );
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSaveExpenseSelect(saveAsOtherExpense: boolean) {
    this.saveAsOtherExpense = saveAsOtherExpense;
  }

  private saveUpdatedTechnicalExaminationAsOtherExpense(technicalExamination: TechnicalExamination) {
    const otherExpense = new OtherExpense({
      id: 0,
      value: ExaminationExpenseConstants.getExpenseConstFromFuelType(technicalExamination.vehicle.fuelType),
      currency: 'PLN',
      date: technicalExamination.examinationDate,
      comment: technicalExamination.comment,
      currentKilometrage: technicalExamination.currentKilometrage,
      itemCount: 1
    });
    this.otherExpenseService
      .createOtherExpense(technicalExamination.vehicle.id, otherExpense)
      .subscribe();
  }

  private initializeData() {
    this.initializeFormGroup();
    this.vehicleService.getVehiclesList().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
    });
  }

  private initializeFormGroup() {
    this.technicalExamination.vehicle = new Vehicle();
    this.technicalExaminationForm = new FormGroup({
      comment: new FormControl(this.technicalExamination.comment,
        Validators.compose([
          Validators.maxLength(TechnicalExaminationValidatorConstants.MAX_COMMENT_LENGTH),
          Validators.required
        ])),
      currentKilometrage: new FormControl(this.technicalExamination.currentKilometrage,
        Validators.compose([
          Validators.min(TechnicalExaminationValidatorConstants.MIN_CURRENT_KILOMETRAGE),
          Validators.required
        ])),
      examinationDate: new FormControl(this.technicalExamination.examinationDate,
        Validators.compose([
          Validators.required
        ])),
      nextExaminationDate: new FormControl(this.technicalExamination.nextExaminationDate,
        Validators.compose([
          Validators.required
        ])),
      vehicle: new FormControl(this.technicalExamination.vehicle),
    });
  }

  getVehicleShortInformation(vehicle: Vehicle) {
    return `${vehicle.make} ${vehicle.model} - [${vehicle.plateNumber}]`;
  }
}
