import {Component, Input, OnInit} from '@angular/core';
import {FuelExpense} from '../../../shared/model/expense/fuel-expense';

@Component({
  selector: 'app-fuel-expenses',
  templateUrl: './fuel-expenses.component.html',
  styleUrls: ['./fuel-expenses.component.scss']
})
export class FuelExpensesComponent implements OnInit {

  @Input() fuelExpenses: FuelExpense[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
