import {Component, Input, OnInit} from '@angular/core';
import {CarPartExpense} from '../../../shared/model/expense/car-part-expense';

@Component({
  selector: 'app-car-part-expenses',
  templateUrl: './car-part-expenses.component.html',
  styleUrls: ['./car-part-expenses.component.scss']
})
export class CarPartExpensesComponent implements OnInit {

  @Input() carPartExpenses: CarPartExpense[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
