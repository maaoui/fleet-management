import {Department} from '../department/department';
import {BaseEntity, BaseEntityAttrs} from '../base-entity';

export interface EmployeeAttrs extends BaseEntityAttrs {
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  department: Department;
}

export class Employee extends BaseEntity {
  constructor(attrs: Partial<EmployeeAttrs> = {}) {
    super(attrs);
    this.phoneNumber = attrs.phoneNumber;
    this.email = attrs.email;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.department = attrs.department;
    this.enabled = attrs.enabled;
  }

  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  department: Department;
}
