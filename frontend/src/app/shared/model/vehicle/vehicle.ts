import {Employee} from '../employee/employee';
import {FuelType} from '../enums/fuel-type.enum';
import {Insurance} from '../insurance/insurance';

export interface VehicleAttrs {
  id: number;
  plateNumber: string;
  make: string;
  model: string;
  horsePower: number;
  vin: string;
  firstRegistration: Date;
  yearOfProduction: number;
  weight: number;
  currentEmployee: Employee;
  fuelType: FuelType;
  insurance: Insurance;
}

export class Vehicle {
  constructor(attrs: Partial<VehicleAttrs> = {}) {
    this.id = attrs.id;
    this.plateNumber = attrs.plateNumber;
    this.make = attrs.make;
    this.model = attrs.model;
    this.horsePower = attrs.horsePower;
    this.vin = attrs.vin;
    this.firstRegistration = attrs.firstRegistration;
    this.yearOfProduction = attrs.yearOfProduction;
    this.weight = attrs.weight;
    this.currentEmployee = attrs.currentEmployee;
    this.fuelType = attrs.fuelType;
    this.insurance = attrs.insurance;
  }

  id: number;
  plateNumber: string;
  make: string;
  model: string;
  horsePower: number;
  vin: string;
  firstRegistration: Date;
  yearOfProduction: number;
  weight: number;
  currentEmployee: Employee;
  fuelType: FuelType;
  insurance: Insurance;

}
