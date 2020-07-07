export interface VehicleAttrs {
  id: number;
  plateNumber: string;
  make: string;
  model: string;
  horsePower: number;
  vin: string;
  firstRegistration: number;
  yearOfProduction: number;
  weight: number;
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
  }

  id: number;
  plateNumber: string;
  make: string;
  model: string;
  horsePower: number;
  vin: string;
  firstRegistration: number;
  yearOfProduction: number;
  weight: number;
}
