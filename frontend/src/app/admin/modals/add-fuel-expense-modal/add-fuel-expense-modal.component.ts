import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FuelExpense} from '../../../shared/model/expense/fuel-expense';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FuelExpenseService} from '../../../shared/service/exploitation/expense/fuel-expense.service';
import {FuelType} from '../../../shared/model/enums/fuel-type.enum';

@Component({
  selector: 'app-add-fuel-expense-modal',
  templateUrl: './add-fuel-expense-modal.component.html',
  styleUrls: ['./add-fuel-expense-modal.component.scss']
})
export class AddFuelExpenseModalComponent implements OnInit {
  @Input() vehicle: Vehicle;
  @Output() postExpenseEmitter = new EventEmitter<string>();

  private fuelExpenseForm: FormGroup;
  private fuelExpense: FuelExpense;
  private fuelTypeValues: FuelType[];

  constructor(public activeModal: NgbActiveModal, private fuelExpenseService: FuelExpenseService) {
  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const date = new Date(Object.values(this.fuelExpenseForm.value.date).join('-'));
    const fuelExpense = new FuelExpense({
      ...this.fuelExpenseForm.value,
      date
    });
    this.fuelExpenseService
      .createFuelExpense(this.vehicle.id, fuelExpense)
      .subscribe((updatedFuelExpense: FuelExpense) => {
          this.postExpenseEmitter.emit('updated');
          this.activeModal.close();
        },
        (errorMessage) => {
          // TODO Handle error message
        }
      );
  }

  private initializeFormGroup() {
    this.fuelTypeValues = Object.values(FuelType);
    this.fuelExpense = new FuelExpense();
    this.fuelExpenseForm = new FormGroup({
      value: new FormControl(this.fuelExpense.value,
        Validators.compose([
          Validators.minLength(this.getMinValue()),
          Validators.required
        ])),
      currency: new FormControl(this.fuelExpense.currency,
        Validators.compose([
          Validators.minLength(this.getCurrencyLength()),
          Validators.maxLength(this.getCurrencyLength()),
          Validators.required
        ])),
      date: new FormControl(this.fuelExpense.date,
        Validators.compose([
          Validators.required
        ])),
      comment: new FormControl(this.fuelExpense.comment,
        Validators.compose([
          Validators.minLength(this.getMinCommentSize()),
          Validators.maxLength(this.getMaxCommentSize()),
          Validators.required
        ])),
      currentKilometrage: new FormControl(this.fuelExpense.currentKilometrage,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*')
        ])),
      fuelAmount: new FormControl(this.fuelExpense.fuelAmount,
        Validators.compose([
          Validators.required,
          Validators.min(this.getMinFuelAmount()),
        ])
      ),
      fuelType: new FormControl(this.fuelExpense.fuelType,
        Validators.compose([
          Validators.required,
        ])
      ),
    });
  }

  private getMinValue(): number {
    return 0;
  }

  private getCurrencyLength(): number {
    return 3;
  }

  private getMinCommentSize(): number {
    return 3;
  }

  private getMinFuelAmount(): number {
    return 0;
  }

  private getMaxCommentSize(): number {
    return 1000;
  }
}
