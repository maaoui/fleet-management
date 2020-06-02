import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OtherExpense} from '../../../shared/model/expense/other-expense';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {OtherExpenseService} from '../../../shared/service/exploitation/expense/other-expense.service';

@Component({
  selector: 'app-add-other-expense-modal',
  templateUrl: './add-other-expense-modal.component.html',
  styleUrls: ['./add-other-expense-modal.component.scss']
})
export class AddOtherExpenseModalComponent implements OnInit {
  @Input() vehicle: Vehicle;
  @Output() postExpenseEmitter = new EventEmitter<string>();

  private otherExpenseForm: FormGroup;
  private otherExpense: OtherExpense;

  constructor(public activeModal: NgbActiveModal, private otherExpenseService: OtherExpenseService) {
  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const date = new Date(Object.values(this.otherExpenseForm.value.date).join('-'));
    const otherExpense = new OtherExpense({
      ...this.otherExpenseForm.value,
      date
    });
    this.otherExpenseService
      .createOtherExpense(this.vehicle.id, otherExpense)
      .subscribe((updatedFuelExpense: OtherExpense) => {
          this.postExpenseEmitter.emit('updated');
          this.activeModal.close();
        },
        (errorMessage) => {
          // TODO Handle error message
        }
      );
  }

  private initializeFormGroup() {
    this.otherExpense = new OtherExpense();
    this.otherExpenseForm = new FormGroup({
      value: new FormControl(this.otherExpense.value,
        Validators.compose([
          Validators.minLength(this.getMinValue()),
          Validators.required
        ])),
      currency: new FormControl(this.otherExpense.currency,
        Validators.compose([
          Validators.minLength(this.getCurrencyLength()),
          Validators.maxLength(this.getCurrencyLength()),
          Validators.required
        ])),
      date: new FormControl(this.otherExpense.date,
        Validators.compose([
          Validators.required
        ])),
      comment: new FormControl(this.otherExpense.comment,
        Validators.compose([
          Validators.minLength(this.getMinCommentSize()),
          Validators.maxLength(this.getMaxCommentSize()),
          Validators.required
        ])),
      currentKilometrage: new FormControl(this.otherExpense.currentKilometrage,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*')
        ])),
      itemCount: new FormControl(this.otherExpense.itemCount,
        Validators.compose([
          Validators.required,
          Validators.min(this.getMinFuelAmount()),
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
