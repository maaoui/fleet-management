export class ValidatorConstants {

}

export class DepartmentValidatorConstants {
  public static readonly DEPARTMENT_NAME_MAX_LENGTH: number = 50;
}

export class AddressValidatorConstants {
  public static readonly CITY_MAX_LENGTH: number = 50;
  public static readonly POSTAL_CODE_MAX_LENGTH: number = 10;
  public static readonly STREET_ADDRESS_NAME_MAX_LENGTH: number = 50;

}

export class WorkshopValidatorConstants {
  public static readonly NAME_MAX_LENGTH: number = 50;
  public static readonly PHONE_NUMBER_MAX_LENGTH: number = 20;
  public static readonly PHONE_NUMBER_PATTERN: string = '[1-9][0-9]{8}';
  public static readonly EMAIL_MAX_LENGTH: number = 50;
  public static readonly LATITUDE_MIN_VALUE: number = 0;
  public static readonly LATITUDE_MAX_VALUE: number = 90;
  public static readonly LONGITUDE_MIN_VALUE: number = 0;
  public static readonly LONGITUDE_MAX_VALUE: number = 180;
}

export class VehicleValidatorConstants {
  public static readonly MIN_FIELD_LENGTH: number = 1;
  public static readonly REGISTER_PLATE_MAX_LENGTH: number = 10;
  public static readonly MAKE_MAX_LENGTH: number = 10;
  public static readonly MODEL_MAX_LENGTH: number = 10;
  public static readonly HORSE_POWER_MIN_VALUE: number = 10;
  public static readonly HORSE_POWER_MAX_VALUE: number = 2000;
  public static readonly VIN_MAX_LENGTH: number = 2000;
  public static readonly YEAR_OF_PRODUCTION_MIN_VALUE: number = 1900;
  public static readonly WEIGHT_MIN_VALUE: number = 100;
}

export class TechnicalExaminationValidatorConstants {
  public static readonly MIN_CURRENT_KILOMETRAGE: number = 1;
  public static readonly MAX_COMMENT_LENGTH: number = 512;
}

export class EmployeeValidatorConstants {
  public static readonly FIRST_NAME_MAX_LENGTH: number = 30;
  public static readonly LAST_NAME_MAX_LENGTH: number = 30;
  public static readonly EMAIL_MAX_LENGTH: number = 30;
  public static readonly PHONE_NUMBER_MAX_LENGTH: number = 20;
  public static readonly PHONE_NUMBER_PATTERN: string = '[1-9][0-9]{8}';
  public static readonly PASSWORD_MIN_LENGTH: number = 6;
  public static readonly PASSWORD_MAX_LENGTH: number = 128;
}

export class InsuranceValidatorConstants {
  public static readonly PHONE_NUMBER_PATTERN: string = '[1-9][0-9]{8}';
  public static readonly COMPANY_NAME_MIN_LENGTH: number = 0;
  public static readonly COMPANY_NAME_MAX_LENGTH: number = 100;
  public static readonly INSURANCE_NUMBER_MIN_LENGTH: number = 0;
  public static readonly INSURANCE_NUMBER_MAX_LENGTH: number = 100;
}
