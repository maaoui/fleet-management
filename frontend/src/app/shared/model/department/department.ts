import {Address} from '../address/address';
import {Region} from '../address/region';
import {Employee} from '../employee/employee';
import {BaseEntity, BaseEntityAttrs} from '../base-entity';

export interface DepartmentAttrs extends BaseEntityAttrs {
  address: Address;
  region: Region;
  employees: Employee[];
  departmentName: string;
}

export class Department extends BaseEntity {
  constructor(attrs: Partial<DepartmentAttrs> = {}) {
    super(attrs);
    this.address = attrs.address;
    this.region = attrs.region;
    this.employees = attrs.employees;
    this.departmentName = attrs.departmentName;
  }

  address: Address;
  region: Region;
  employees: Employee[];
  departmentName: string;
}
