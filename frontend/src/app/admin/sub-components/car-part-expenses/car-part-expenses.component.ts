import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {CarPartExpense} from '../../../shared/model/expense/car-part-expense';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarPartModalComponent} from '../../modals/car-part-modal/car-part-modal.component';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {AddCarPartExpenseModalComponent} from '../../modals/add-car-part-expense-modal/add-car-part-expense-modal.component';
import {first, map} from 'rxjs/operators';
import {ExploitationService} from '../../../shared/service/exploitation/exploitation.service';
import {ExploitationReport} from '../../../shared/model/exploitation/exploitation-report';
import {DeleteExpenseModalComponent} from '../../modals/delete-expense-modal/delete-expense-modal.component';
import {ExpenseEmitterDeletionResponse} from '../../model/expense-emitter-deletion-response';
import {CarPartExpenseService} from '../../../shared/service/exploitation/expense/car-part-expense.service';
import {Constants} from '../../../shared/constants/constants';

@Component({
  selector: 'app-car-part-expenses',
  templateUrl: './car-part-expenses.component.html',
  styleUrls: ['./car-part-expenses.component.scss']
})
export class CarPartExpensesComponent implements OnInit {

  @Input() carPartExpenses: CarPartExpense[];
  @Input() vehicle: Vehicle;
  @Input() readonly canDelete: boolean;

  constructor(private modalService: NgbModal,
              private exploitationService: ExploitationService,
              private carPartExpenseService: CarPartExpenseService) {
  }

  ngOnInit(): void {
  }

  openCarPartModal(expense: CarPartExpense) {
    const modalRef = this.modalService.open(CarPartModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.carPart = expense.carPart;
  }

  openAddCarPartExpenseModal() {
    const modalRef = this.modalService.open(AddCarPartExpenseModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.vehicle = this.vehicle;
    modalRef.componentInstance
      .postExpenseEmitter
      .pipe(first())
      .subscribe(() => this.refreshCarPartExpenses());
  }

  openDeleteExpenseModal(expense: CarPartExpense) {
    if (this.canDelete) {
      const modalRef = this.modalService.open(DeleteExpenseModalComponent, {size: Constants.MODAL_SIZE_LG});
      modalRef.componentInstance.expenseDeletetionEmitter = new EventEmitter<CarPartExpense>();
      modalRef.componentInstance.expense = new CarPartExpense(expense);
      modalRef.componentInstance
        .expenseDeletetionEmitter
        .pipe(
          map((emittedExpense: CarPartExpense) => this.createExpenseEmitterResponse(emittedExpense)),
          first()
        )
        .subscribe((expenseEmitterDeletionReponse: ExpenseEmitterDeletionResponse) =>
          this.handleEmittedDeletionResponse(expenseEmitterDeletionReponse)
        );
    }
  }

  private refreshCarPartExpenses() {
    this.exploitationService
      .getExploitationReportByVehicleId(this.vehicle.id)
      .subscribe((report: ExploitationReport) => {
        this.carPartExpenses = [...report.carPartsExpenses];
      });
  }

  private createExpenseEmitterResponse(emittedExpense: CarPartExpense) {
    return new ExpenseEmitterDeletionResponse({
      delete: emittedExpense instanceof CarPartExpense,
      expense: emittedExpense
    });
  }

  private handleEmittedDeletionResponse(expenseEmitterDeletionResponse: ExpenseEmitterDeletionResponse) {
    if (expenseEmitterDeletionResponse.delete) {
      this.carPartExpenseService
        .deleteCarPartExpense(expenseEmitterDeletionResponse.expense.id)
        .subscribe((response) => {
            this.refreshCarPartExpenses();
            // TODO Show deleted
          },
          (error) => {
            // TODO Show error
          });
    }
  }

}
