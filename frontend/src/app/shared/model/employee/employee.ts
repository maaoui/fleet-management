export interface EmployeeAttrs {
  id: number;
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
}

export class Employee {
  constructor(attrs: Partial<EmployeeAttrs> = {}) {
    this.id = attrs.id;
    this.phoneNumber = attrs.phoneNumber;
    this.email = attrs.email;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
  }

  id: number;
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
}
