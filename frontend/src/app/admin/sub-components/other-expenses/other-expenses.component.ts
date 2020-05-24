import {Component, Input, OnInit} from '@angular/core';
import {OtherExpense} from '../../../shared/model/expense/other-expense';

@Component({
  selector: 'app-other-expenses',
  templateUrl: './other-expenses.component.html',
  styleUrls: ['./other-expenses.component.scss']
})
export class OtherExpensesComponent implements OnInit {
  @Input() otherExpenses: OtherExpense[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
