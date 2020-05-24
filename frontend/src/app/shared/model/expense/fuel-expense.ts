import {BaseExpense, BaseExpenseAttributes} from './base-expense';

export interface FuelExpenseAttrs extends BaseExpenseAttributes {
  fuelAmount: number;
  fuelType;
}

export class FuelExpense extends BaseExpense {
  constructor(attrs: Partial<FuelExpenseAttrs> = {}) {
    super(attrs);
    this.fuelAmount = attrs.fuelAmount;
    this.fuelType = attrs.fuelType;
  }

  fuelAmount: number;
  fuelType;
}
