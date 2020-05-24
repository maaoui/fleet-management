import {BaseExpense, BaseExpenseAttributes} from './base-expense';


export interface OtherExpenseAttrs extends BaseExpenseAttributes {
  itemCount: number;
}

export class OtherExpense extends BaseExpense {
  constructor(attrs: Partial<OtherExpenseAttrs> = {}) {
    super(attrs);
    this.itemCount = attrs.itemCount;
  }

  itemCount: number;
}


