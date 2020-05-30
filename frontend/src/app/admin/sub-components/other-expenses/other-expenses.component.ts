import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {OtherExpense} from '../../../shared/model/expense/other-expense';
import {ServiceExpense} from '../../../shared/model/expense/service-expense';
import {DeleteExpenseModalComponent} from '../../modals/delete-expense-modal/delete-expense-modal.component';
import {first, map} from 'rxjs/operators';
import {ExpenseEmitterDeletionResponse} from '../../model/expense-emitter-deletion-response';
import {ExploitationReport} from '../../../shared/model/exploitation/exploitation-report';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExploitationService} from '../../../shared/service/exploitation/exploitation.service';
import {OtherExpenseService} from '../../../shared/service/exploitation/expense/other-expense.service';
import {CarPartModalComponent} from '../../modals/car-part-modal/car-part-modal.component';
import {Constraint} from '../../../shared/constraints/constraint';

@Component({
  selector: 'app-other-expenses',
  templateUrl: './other-expenses.component.html',
  styleUrls: ['./other-expenses.component.scss']
})
export class OtherExpensesComponent implements OnInit {
  @Input() otherExpenses: OtherExpense[];
  @Input() vehicle: Vehicle;

  constructor(private modalService: NgbModal,
              private otherExpenseService: OtherExpenseService,
              private exploitationService: ExploitationService) {
  }

  ngOnInit(): void {
  }

  openDeleteExpenseModal(expense: OtherExpense) {
    const modalRef = this.modalService.open(DeleteExpenseModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.expenseDeletetionEmitter = new EventEmitter<OtherExpense>();
    modalRef.componentInstance.expense = new OtherExpense(expense);
    modalRef.componentInstance
      .expenseDeletetionEmitter
      .pipe(
        map((emittedExpense: OtherExpense) => this.createExpenseEmitterResponse(emittedExpense)),
        first()
      )
      .subscribe((expenseEmitterDeletionResponse: ExpenseEmitterDeletionResponse) =>
        this.handleEmittedDeletionResponse(expenseEmitterDeletionResponse));
  }

  private createExpenseEmitterResponse(emittedExpense: OtherExpense) {
    return new ExpenseEmitterDeletionResponse({
      delete: emittedExpense instanceof OtherExpense,
      expense: emittedExpense
    });
  }

  private handleEmittedDeletionResponse(expenseEmitterDeletionResponse: ExpenseEmitterDeletionResponse) {
    if (expenseEmitterDeletionResponse.delete) {
      this.otherExpenseService
        .deleteOtherExpense(expenseEmitterDeletionResponse.expense.id)
        .subscribe((response) => {
            console.log(response);
            this.refreshOtherExpenses();
            // TODO Show deleted
          },
          (error) => {
            // TODO Show error
          });
    }
  }

  private refreshOtherExpenses() {
    this.exploitationService
      .getExploitationReportByVehicleId(this.vehicle.id)
      .subscribe((report: ExploitationReport) => {
        this.otherExpenses = [...report.otherExpenses];
      });
  }
}
