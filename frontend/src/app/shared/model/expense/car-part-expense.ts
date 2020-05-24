import {BaseExpense, BaseExpenseAttributes} from './base-expense';
import {CarPart} from '../vehicle/car-part';

export interface CarPartExpenseAttrs extends BaseExpenseAttributes {
  carPart: CarPart;
}

export class CarPartExpense extends BaseExpense {
  constructor(attrs: Partial<CarPartExpenseAttrs> = {}) {
    super(attrs);
    this.carPart = attrs.carPart;
  }

  carPart: CarPart;
}
