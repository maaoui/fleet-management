import {FuelType} from '../../shared/model/enums/fuel-type.enum';

export class ExaminationExpenseConstants {
  public static readonly DIESEL_EXPENSE_COST: number = 101;
  public static readonly PETROL_EXPENSE_COST: number = 101;
  public static readonly LPG_EXPENSE_COST: number = 162;

  static getExpenseConstFromFuelType(fuelType: FuelType): number {
    switch (fuelType) {
      case FuelType.DIESEL:
        return ExaminationExpenseConstants.DIESEL_EXPENSE_COST;
      case FuelType.LPG:
        return ExaminationExpenseConstants.LPG_EXPENSE_COST;
      case FuelType.PETROL:
        return ExaminationExpenseConstants.PETROL_EXPENSE_COST;
    }
  }

}
