import {Address} from '../address/address';
import {Region} from '../address/region';
import {Employee} from '../employee/employee';

export interface DepartmentAttrs {
  id: number;
  address: Address;
  region: Region;
  employees: Employee[];
  departmentName: string;
}

export class Department {
  constructor(attrs: Partial<DepartmentAttrs> = {}) {
    this.id = attrs.id;
    this.address = attrs.address;
    this.region = attrs.region;
    this.employees = attrs.employees;
    this.departmentName = attrs.departmentName;
  }

  id: number;
  address: Address;
  region: Region;
  employees: Employee[];
  departmentName: string;
}
