import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {CarPartExpense} from '../../../shared/model/expense/car-part-expense';

@Component({
  selector: 'app-add-car-part-expense-modal',
  templateUrl: './add-car-part-expense-modal.component.html',
  styleUrls: ['./add-car-part-expense-modal.component.scss']
})
export class AddCarPartExpenseModalComponent implements OnInit {

  @Input() vehicle: Vehicle;

  private carPartExpenseForm: FormGroup;
  private carPartExpense: CarPartExpense = new CarPartExpense();

  // TODO Add event emitter.
  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    // TODO save to endpoint.
  }

  private initializeFormGroup() {
    return this.carPartExpenseForm = new FormGroup({
      // id: new FormControl(this.carPartExpense.id),
      value: new FormControl(this.carPartExpense.value,
        Validators.compose([
          Validators.minLength(this.getMinValue()),
          Validators.required
        ])),
      // TODO Currency picker
      currency: new FormControl(this.carPartExpense.currency,
        Validators.compose([
          Validators.required
        ])),
      // TODO Date picker
      date: new FormControl(this.carPartExpense.date,
        Validators.compose([
          Validators.minLength(this.getMinValue()),
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
          Validators.required
        ])),
      // TODO CarPart picker
      carPart: new FormControl(this.carPartExpense.carPart,
        Validators.compose([
          Validators.minLength(this.getMinValue()),
          Validators.required
        ])),
    });
  }

  private getMinValue() {
    return 0;
  }

  private getMinCommentSize() {
    return 1;
  }

  private getMaxCommentSize() {
    return 1000;
  }
}
