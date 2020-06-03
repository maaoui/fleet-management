import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceExpense} from '../../../shared/model/expense/service-expense';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CarServiceExpenseService} from '../../../shared/service/exploitation/expense/car-service-expense.service';
import {CarPart} from '../../../shared/model/vehicle/car-part';
import {Workshop} from '../../../shared/model/workshop/workshop';
import {WorkshopService} from '../../../shared/service/vehicle/workshop.service';
import {PartType} from '../../../shared/model/enums/part-type.enum';

@Component({
  selector: 'app-add-servicing-expense-modal',
  templateUrl: './add-servicing-expense-modal.component.html',
  styleUrls: ['./add-servicing-expense-modal.component.scss']
})
export class AddServicingExpenseModalComponent implements OnInit {
  @Input() vehicle: Vehicle;
  @Output() postExpenseEmitter = new EventEmitter<string>();

  private servicingExpenseForm: FormGroup;
  private serviceExpense: ServiceExpense;
  private workshops: Workshop[];
  private partTypeValues: PartType[] = Object.values(PartType);

  constructor(public activeModal: NgbActiveModal,
              private carServiceExpenseService: CarServiceExpenseService,
              private workshopService: WorkshopService
  ) {
  }


  ngOnInit(): void {
    this.initializeData();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const date = new Date(Object.values(this.servicingExpenseForm.value.date).join('-'));
    const serviceExpense = new ServiceExpense({
      ...this.servicingExpenseForm.value,
      date
    });
    this.carServiceExpenseService
      .createCarServiceExpense(this.vehicle.id, serviceExpense)
      .subscribe((updatedServiceExpense: ServiceExpense) => {
          this.postExpenseEmitter.emit('updated');
          this.activeModal.close();
        },
        (errorMessage) => {
          // TODO Handle error message
        }
      );
  }

  private initializeData() {
    this.initializeFormGroup();
    this.workshopService.getWorkshopsList().subscribe(workshops => {
      this.workshops = workshops;
    });
  }

  private initializeFormGroup() {
    this.serviceExpense = new ServiceExpense();
    this.serviceExpense.carPart = new CarPart();
    this.serviceExpense.workshop = new Workshop();
    this.servicingExpenseForm = new FormGroup({
      value: new FormControl(this.serviceExpense.value,
        Validators.compose([
          Validators.minLength(this.getMinValue()),
          Validators.required
        ])),
      currency: new FormControl(this.serviceExpense.currency,
        Validators.compose([
          Validators.minLength(this.getCurrencyLength()),
          Validators.maxLength(this.getCurrencyLength()),
          Validators.required
        ])),
      date: new FormControl(this.serviceExpense.date,
        Validators.compose([
          Validators.required
        ])),
      comment: new FormControl(this.serviceExpense.comment,
        Validators.compose([
          Validators.minLength(this.getMinCommentSize()),
          Validators.maxLength(this.getMaxCommentSize()),
          Validators.required
        ])),
      currentKilometrage: new FormControl(this.serviceExpense.currentKilometrage,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*')
        ])),
      workshop: new FormControl(this.serviceExpense.workshop,
        Validators.compose([
          Validators.required
        ])),
      carPart: new FormGroup({
        partType: new FormControl(this.serviceExpense.carPart.partType,
          Validators.compose([
            Validators.required
          ])),
        name: new FormControl(this.serviceExpense.carPart.name,
          Validators.compose([
            Validators.required,
            Validators.minLength(this.getMinCommentSize()),
            Validators.maxLength(this.getPartNameMaxLength())
          ])),
        description: new FormControl(this.serviceExpense.carPart.description,
          Validators.compose([
            Validators.required,
            Validators.minLength(this.getMinCommentSize()),
            Validators.maxLength(this.getPartDescriptionMaxLength())
          ])),
      })
    });
  }

  private getPartDescriptionMaxLength(): number {
    return 250;
  }

  private getPartNameMaxLength(): number {
    return 30;
  }

  private getCurrencyLength(): number {
    return 3;
  }

  private getMinValue(): number {
    return 0;
  }

  private getMinCommentSize(): number {
    return 1;
  }

  private getMaxCommentSize(): number {
    return 1000;
  }
}
