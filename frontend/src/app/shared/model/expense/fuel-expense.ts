import {BaseExpense, BaseExpenseAttributes} from './base-expense';
import {FuelType} from '../enums/fuel-type.enum';

export interface FuelExpenseAttrs extends BaseExpenseAttributes {
  fuelAmount: number;
  fuelType: FuelType;
}

export class FuelExpense extends BaseExpense {
  constructor(attrs: Partial<FuelExpenseAttrs> = {}) {
    super(attrs);
    this.fuelAmount = attrs.fuelAmount;
    this.fuelType = attrs.fuelType;
  }

  fuelAmount: number;
  fuelType: FuelType;
}
