import {Vehicle, VehicleAttrs} from '../vehicle/vehicle';

export interface InsuranceAttrs {
  id: number;
  vehicle: VehicleAttrs;
  companyName: string;
  insuranceNumber: string;
  contactNumber: string;
  startDate: Date;
  endDate: Date;
}

export class Insurance {
  constructor(attrs: Partial<InsuranceAttrs> = {}) {
    this.id = attrs.id;
    this.vehicle = attrs.vehicle;
    this.companyName = attrs.companyName;
    this.insuranceNumber = attrs.insuranceNumber;
    this.contactNumber = attrs.contactNumber;
    this.startDate = attrs.startDate;
    this.endDate = attrs.endDate;
  }

  id: number;
  vehicle: Vehicle;
  companyName: string;
  insuranceNumber: string;
  contactNumber: string;
  startDate: Date;
  endDate: Date;
}
