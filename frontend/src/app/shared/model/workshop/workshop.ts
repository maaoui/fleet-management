import {Region} from '../address/region';
import {Address} from '../address/address';

export interface WorkshopAttrs {
  id: number;
  email: string;
  phoneNumber: string;
  workshopName: string;
  address: Address;
  region: Region;
  longitude: number;
  latitude: number;
}

export class Workshop {
  constructor(attrs: Partial<WorkshopAttrs> = {}) {
    this.id = attrs.id;
    this.email = attrs.email;
    this.phoneNumber = attrs.phoneNumber;
    this.workshopName = attrs.workshopName;
    this.address = attrs.address;
    this.region = attrs.region;
    this.longitude = attrs.longitude;
    this.latitude = attrs.latitude;
  }

  id: number;
  email: string;
  phoneNumber: string;
  workshopName: string;
  address: Address;
  region: Region;
  longitude: number;
  latitude: number;
}
