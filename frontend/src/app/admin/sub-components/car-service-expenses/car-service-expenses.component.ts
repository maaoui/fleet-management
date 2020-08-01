import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ServiceExpense} from '../../../shared/model/expense/service-expense';
import {CarPartModalComponent} from '../../modals/car-part-modal/car-part-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WorkshopModalComponent} from '../../modals/workshop-modal/workshop-modal.component';
import {DeleteExpenseModalComponent} from '../../modals/delete-expense-modal/delete-expense-modal.component';
import {first, map} from 'rxjs/operators';
import {ExpenseEmitterDeletionResponse} from '../../model/expense-emitter-deletion-response';
import {ExploitationReport} from '../../../shared/model/exploitation/exploitation-report';
import {ExploitationService} from '../../../shared/service/exploitation/exploitation.service';
import {CarServiceExpenseService} from '../../../shared/service/exploitation/expense/car-service-expense.service';
import {Vehicle} from '../../../shared/model/vehicle/vehicle';
import {Constraint} from '../../../shared/constraints/constraint';
import {AddServicingExpenseModalComponent} from '../../modals/add-servicing-expense-modal/add-servicing-expense-modal.component';

@Component({
  selector: 'app-car-service-expenses',
  templateUrl: './car-service-expenses.component.html',
  styleUrls: ['./car-service-expenses.component.scss']
})
export class CarServiceExpensesComponent implements OnInit {

  @Input() serviceExpenses: ServiceExpense[];
  @Input() vehicle: Vehicle;
  @Input() readonly canDelete: boolean;

  constructor(private modalService: NgbModal,
              private carServiceExpenseService: CarServiceExpenseService,
              private exploitationService: ExploitationService) {
  }

  ngOnInit(): void {
  }

  openCarPartModal(expense: ServiceExpense) {
    const modalRef = this.modalService.open(CarPartModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.carPart = expense.carPart;
  }

  openWorkshopModal(expense: ServiceExpense) {
    const modalRef = this.modalService.open(WorkshopModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.workshop = expense.workshop;
  }

  openDeleteExpenseModal(expense: ServiceExpense) {
    if (this.canDelete) {
      const modalRef = this.modalService.open(DeleteExpenseModalComponent, {size: Constraint.MODAL_SIZE_LG});
      modalRef.componentInstance.expenseDeletetionEmitter = new EventEmitter<ServiceExpense>();
      modalRef.componentInstance.expense = new ServiceExpense(expense);
      modalRef.componentInstance
        .expenseDeletetionEmitter
        .pipe(
          map((emittedExpense: ServiceExpense) => this.createExpenseEmitterResponse(emittedExpense)),
          first()
        )
        .subscribe((expenseEmitterDeletionResponse: ExpenseEmitterDeletionResponse) =>
          this.handleEmittedDeletionResponse(expenseEmitterDeletionResponse)
        );
    }
  }

  private createExpenseEmitterResponse(emittedExpense: ServiceExpense) {
    return new ExpenseEmitterDeletionResponse({
      delete: emittedExpense instanceof ServiceExpense,
      expense: emittedExpense
    });
  }

  private handleEmittedDeletionResponse(expenseEmitterDeletionResponse: ExpenseEmitterDeletionResponse) {
    if (expenseEmitterDeletionResponse.delete) {
      this.carServiceExpenseService
        .deleteCarServiceExpense(expenseEmitterDeletionResponse.expense.id)
        .subscribe((response) => {
            console.log(response);
            this.refreshCarServiceExpenses();
            // TODO Show deleted
          },
          (error) => {
            // TODO Show error
          });
    }
  }

  private refreshCarServiceExpenses() {
    this.exploitationService
      .getExploitationReportByVehicleId(this.vehicle.id)
      .subscribe((report: ExploitationReport) => {
        this.serviceExpenses = [...report.serviceExpenses];
      });
  }

  openAddServicingExpenseModal() {
    const modalRef = this.modalService.open(AddServicingExpenseModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.vehicle = this.vehicle;
    modalRef.componentInstance
      .postExpenseEmitter
      .pipe(first())
      .subscribe(() => this.refreshCarServiceExpenses());
  }
}
