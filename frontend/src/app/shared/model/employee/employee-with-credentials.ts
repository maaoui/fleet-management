import {Department} from '../department/department';
import {BaseEntity, BaseEntityAttrs} from '../base-entity';

export interface EmployeeWithCredentialsAttrs extends BaseEntityAttrs {
  phoneNumber: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  department: Department;
}

export class EmployeeWithCredentials extends BaseEntity {
  constructor(attrs: Partial<EmployeeWithCredentialsAttrs> = {}) {
    super(attrs);
    this.phoneNumber = attrs.phoneNumber;
    this.email = attrs.email;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.department = attrs.department;
    this.enabled = attrs.enabled;
    this.password = attrs.password;
  }

  phoneNumber: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  department: Department;
}
