import {Component, Input, OnInit} from '@angular/core';
import {ServiceExpense} from '../../../shared/model/expense/service-expense';
import {CarPartModalComponent} from '../../modals/car-part-modal/car-part-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WorkshopModalComponent} from '../../modals/workshop-modal/workshop-modal.component';

@Component({
  selector: 'app-car-service-expenses',
  templateUrl: './car-service-expenses.component.html',
  styleUrls: ['./car-service-expenses.component.scss']
})
export class CarServiceExpensesComponent implements OnInit {
  @Input() serviceExpenses: ServiceExpense[];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openCarPartModal(expense: ServiceExpense) {
    const modalRef = this.modalService.open(CarPartModalComponent);
    modalRef.componentInstance.carPart = expense.carPart;
  }

  openWorkshopModal(expense: ServiceExpense) {
    const modalRef = this.modalService.open(WorkshopModalComponent);
    modalRef.componentInstance.workshop = expense.workshop;
  }
}
