import {BaseExpense} from '../../shared/model/expense/base-expense';
import {CarPart} from '../../shared/model/vehicle/car-part';


export interface ExpenseEmitterDeletionResponseAttrs {
  delete: boolean;
  expense: BaseExpense;
}

export class ExpenseEmitterDeletionResponse {
  constructor(attrs: Partial<ExpenseEmitterDeletionResponseAttrs> = {}) {
    this.delete = attrs.delete;
    this.expense = attrs.expense;
  }
  delete: boolean;
  expense: BaseExpense;
}
