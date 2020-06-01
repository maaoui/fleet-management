import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FuelExpense} from '../../../shared/model/expense/fuel-expense';
import {DeleteExpenseModalComponent} from '../../modals/delete-expense-modal/delete-expense-modal.component';
import {first, map} from 'rxjs/operators';
import {ExpenseEmitterDeletionResponse} from '../../model/expense-emitter-deletion-response';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExploitationReport} from '../../../shared/model/exploitation/exploitation-report';
import {ExploitationService} from '../../../shared/service/exploitation/exploitation.service';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {FuelExpenseService} from '../../../shared/service/exploitation/expense/fuel-expense.service';
import {Constraint} from '../../../shared/constraints/constraint';
import {AddFuelExpenseModalComponent} from '../../modals/add-fuel-expense-modal/add-fuel-expense-modal.component';

@Component({
  selector: 'app-fuel-expenses',
  templateUrl: './fuel-expenses.component.html',
  styleUrls: ['./fuel-expenses.component.scss']
})
export class FuelExpensesComponent implements OnInit {

  @Input() fuelExpenses: FuelExpense[];
  @Input() vehicle: Vehicle;

  constructor(private modalService: NgbModal,
              private fuelExpenseService: FuelExpenseService,
              private exploitationService: ExploitationService) {
  }

  ngOnInit(): void {
  }

  openDeleteExpenseModal(expense: FuelExpense) {
    const modalRef = this.modalService.open(DeleteExpenseModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.expenseDeletetionEmitter = new EventEmitter<FuelExpense>();
    modalRef.componentInstance.expense = new FuelExpense(expense);
    modalRef.componentInstance
      .expenseDeletetionEmitter
      .pipe(
        map((emittedExpense: FuelExpense) => this.createExpenseEmitterResponser(emittedExpense)),
        first()
      )
      .subscribe((expenseEmitterDeletionResponse: ExpenseEmitterDeletionResponse) =>
        this.handleEmittedDeletionResponse(expenseEmitterDeletionResponse));
  }

  private createExpenseEmitterResponser(emittedExpense: FuelExpense) {
    return new ExpenseEmitterDeletionResponse({
      delete: emittedExpense instanceof FuelExpense,
      expense: emittedExpense
    });
  }

  private handleEmittedDeletionResponse(expenseEmitterDeletionResponse: ExpenseEmitterDeletionResponse) {
    if (expenseEmitterDeletionResponse.delete) {
      this.fuelExpenseService
        .deleteFuelExpense(expenseEmitterDeletionResponse.expense.id)
        .subscribe((response) => {
            console.log(response);
            this.refreshFuelExpenses();
            // TODO Show deleted
          },
          (error) => {
            // TODO Show error
          });
    }
  }

  private refreshFuelExpenses() {
    this.exploitationService
      .getExploitationReportByVehicleId(this.vehicle.id)
      .subscribe((report: ExploitationReport) => {
        this.fuelExpenses = [...report.fuelExpenses];
      });
  }

  openAddFuelExpenseModal() {
    const modalRef = this.modalService.open(AddFuelExpenseModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.vehicle = this.vehicle;
    modalRef.componentInstance
      .postExpenseEmitter
      .pipe(first())
      .subscribe(() => this.refreshFuelExpenses());
  }

}
