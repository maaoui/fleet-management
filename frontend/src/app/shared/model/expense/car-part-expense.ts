import {BaseExpense, BaseExpenseAttributes} from './base-expense';

export interface CarPartExpenseAttrs extends BaseExpenseAttributes {
  carPart;
}

export class CarPartExpense extends BaseExpense {
  constructor(attrs: Partial<CarPartExpenseAttrs> = {}) {
    super(attrs);
    this.carPart = attrs.carPart;
  }

  carPart;
}
