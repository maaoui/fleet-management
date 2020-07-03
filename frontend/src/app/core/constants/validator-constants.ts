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
