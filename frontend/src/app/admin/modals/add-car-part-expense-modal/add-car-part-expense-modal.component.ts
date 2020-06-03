import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {CarPartExpense} from '../../../shared/model/expense/car-part-expense';
import {PartType} from '../../../shared/model/enums/part-type.enum';
import {CarPart} from '../../../shared/model/vehicle/car-part';
import {CarPartExpenseService} from '../../../shared/service/exploitation/expense/car-part-expense.service';

@Component({
  selector: 'app-add-car-part-expense-modal',
  templateUrl: './add-car-part-expense-modal.component.html',
  styleUrls: ['./add-car-part-expense-modal.component.scss']
})
export class AddCarPartExpenseModalComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() postExpenseEmitter = new EventEmitter<string>();

  private carPartExpenseForm: FormGroup;
  private carPartExpense: CarPartExpense;
  private partTypeValues: PartType[] = Object.values(PartType);

  constructor(public activeModal: NgbActiveModal, private carPartExpenseService: CarPartExpenseService) {

  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const date = new Date(Object.values(this.carPartExpenseForm.value.date).join('-'));
    const carPartExpense = new CarPartExpense({
      ...this.carPartExpenseForm.value,
      date
    });
    this.carPartExpenseService
      .createCarPartExpense(this.vehicle.id, carPartExpense)
      .subscribe((updatedCarPartExpense: CarPartExpense) => {
          this.postExpenseEmitter.emit('updated');
          this.activeModal.close();
        },
        (errorMessage) => {
          // TODO Handle error message
        }
      );
  }

  private initializeFormGroup() {
    this.carPartExpense = new CarPartExpense();
    this.carPartExpense.carPart = new CarPart();
    this.carPartExpenseForm = new FormGroup({
      value: new FormControl(this.carPartExpense.value,
        Validators.compose([
          Validators.minLength(this.getMinValue()),
          Validators.required
        ])),
      currency: new FormControl(this.carPartExpense.currency,
        Validators.compose([
          Validators.minLength(this.getCurrencyLength()),
          Validators.maxLength(this.getCurrencyLength()),
          Validators.required
        ])),
      date: new FormControl(this.carPartExpense.date,
        Validators.compose([
          Validators.required
        ])),
      comment: new FormControl(this.carPartExpense.comment,
        Validators.compose([
          Validators.minLength(this.getMinCommentSize()),
          Validators.maxLength(this.getMaxCommentSize()),
          Validators.required
        ])),
      currentKilometrage: new FormControl(this.carPartExpense.currentKilometrage,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*')
        ])),
      carPart: new FormGroup({
        partType: new FormControl(this.carPartExpense.carPart.partType,
          Validators.compose([
            Validators.required
          ])),
        name: new FormControl(this.carPartExpense.carPart.name,
          Validators.compose([
            Validators.required,
            Validators.minLength(this.getMinCommentSize()),
            Validators.maxLength(this.getPartNameMaxLength())
          ])),
        description: new FormControl(this.carPartExpense.carPart.description,
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
