import {Component, Input, OnInit} from '@angular/core';
import {CarPartExpense} from '../../../shared/model/expense/car-part-expense';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarPartModalComponent} from '../../modals/car-part-modal/car-part-modal.component';

@Component({
  selector: 'app-car-part-expenses',
  templateUrl: './car-part-expenses.component.html',
  styleUrls: ['./car-part-expenses.component.scss']
})
export class CarPartExpensesComponent implements OnInit {

  @Input() carPartExpenses: CarPartExpense[];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openCarPartModal(expense: CarPartExpense) {
    const modalRef = this.modalService.open(CarPartModalComponent);
    modalRef.componentInstance.carPart = expense.carPart;
  }
}
