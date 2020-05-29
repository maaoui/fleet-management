import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {CarPartExpense} from '../../../shared/model/expense/car-part-expense';
import {PartType} from '../../../shared/model/enums/part-type.enum';
import {CarPart} from '../../../shared/model/vehicle/car-part';

@Component({
  selector: 'app-add-car-part-expense-modal',
  templateUrl: './add-car-part-expense-modal.component.html',
  styleUrls: ['./add-car-part-expense-modal.component.scss']
})
export class AddCarPartExpenseModalComponent implements OnInit {

  @Input() vehicle: Vehicle;

  private carPartExpenseForm: FormGroup;
  private carPartExpense: CarPartExpense;
  private partTypeValues: PartType[] = Object.values(PartType);

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
    const date = new Date(Object.values({year: 2020, month: 5, day: 21}).join('-'));

    console.log(this.carPartExpenseForm);
  }

  private initializeFormGroup() {
    this.carPartExpense = new CarPartExpense();
    this.carPartExpense.carPart = new CarPart();
    this.carPartExpenseForm = new FormGroup({
      // id: new FormControl(this.carPartExpense.id),
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
      carPartPartType: new FormControl(this.carPartExpense.carPart.partType,
        Validators.compose([
          Validators.required
        ])),
      carPartName: new FormControl(this.carPartExpense.carPart.name,
        Validators.compose([
          Validators.required,
          Validators.minLength(this.getMinCommentSize()),
          Validators.maxLength(this.getPartNameMaxLength())
        ])),
      carPartDescription: new FormControl(this.carPartExpense.carPart.description,
        Validators.compose([
          Validators.required,
          Validators.minLength(this.getMinCommentSize()),
          Validators.maxLength(this.getPartDescriptionMaxLength())
        ])),
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
