export interface BaseExpenseAttributes {
  id: number;
  value: number;
  currency: string;
  date: Date;
  comment: string;
  currentKilometrage: number;
}

export class BaseExpense {
  id: number;
  value: number;
  currency: string;
  date: Date;
  comment: string;
  currentKilometrage: number;

  constructor(attrs: Partial<BaseExpenseAttributes> = {}) {
    this.id = attrs.id;
    this.value = attrs.value;
    this.currency = attrs.currency;
    this.date = attrs.date;
    this.comment = attrs.comment;
    this.currentKilometrage = attrs.currentKilometrage;
  }
}
