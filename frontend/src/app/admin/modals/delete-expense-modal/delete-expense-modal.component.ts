import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseExpense} from '../../../shared/model/expense/base-expense';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-expense-modal',
  templateUrl: './delete-expense-modal.component.html',
  styleUrls: ['./delete-expense-modal.component.scss']
})
export class DeleteExpenseModalComponent<T extends BaseExpense> implements OnInit {
  @Input() expense: T;
  @Output() expenseDeletetionEmitter: EventEmitter<T>;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.activeModal.close();
  }

  onDelete() {
    this.expenseDeletetionEmitter.emit(this.expense);
    this.activeModal.close();
  }
}
