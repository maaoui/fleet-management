import {BaseExpense, BaseExpenseAttributes} from './base-expense';

export interface ServiceExpenseAttrs extends BaseExpenseAttributes {
  workshop;
  carPart;
}

export class ServiceExpense extends BaseExpense {
  constructor(attrs: Partial<ServiceExpenseAttrs> = {}) {
    super(attrs);
    this.workshop = attrs.workshop;
    this.carPart = attrs.carPart;
  }

  workshop;
  carPart;
}


