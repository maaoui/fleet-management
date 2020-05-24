import {BaseExpense, BaseExpenseAttributes} from './base-expense';
import {CarPart} from '../vehicle/car-part';
import {Workshop} from '../workshop/workshop';

export interface ServiceExpenseAttrs extends BaseExpenseAttributes {
  workshop: Workshop;
  carPart: CarPart;
}

export class ServiceExpense extends BaseExpense {
  constructor(attrs: Partial<ServiceExpenseAttrs> = {}) {
    super(attrs);
    this.workshop = attrs.workshop;
    this.carPart = attrs.carPart;
  }

  workshop: Workshop;
  carPart: CarPart;
}


