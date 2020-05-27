import {Region} from '../address/region';
import {Address} from '../address/address';

export interface WorkshopAttrs {
  id: number;
  email: string;
  phoneNumber: string;
  workshopName: string;
  address: Address;
  region: Region;
}

export class Workshop {
  constructor(attrs: Partial<WorkshopAttrs> = {}) {
    this.id = attrs.id;
    this.email = attrs.email;
    this.phoneNumber = attrs.phoneNumber;
    this.workshopName = attrs.workshopName;
    this.address = attrs.address;
    this.region = attrs.region;
  }

  id: number;
  email: string;
  phoneNumber: string;
  workshopName: string;
  address: Address;
  region: Region;
}
