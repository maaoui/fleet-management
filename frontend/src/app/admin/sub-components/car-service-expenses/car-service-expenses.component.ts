import {Component, Input, OnInit} from '@angular/core';
import {ServiceExpense} from '../../../shared/model/expense/service-expense';

@Component({
  selector: 'app-car-service-expenses',
  templateUrl: './car-service-expenses.component.html',
  styleUrls: ['./car-service-expenses.component.scss']
})
export class CarServiceExpensesComponent implements OnInit {
  @Input() serviceExpenses: ServiceExpense[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
