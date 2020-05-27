export interface AddressAttrs {
  id: number;
  city: string;
  postalCode: string;
  streetAddress: string;
}

export class Address {
  constructor(attrs: Partial<AddressAttrs> = {}) {
    this.id = attrs.id;
    this.city = attrs.city;
    this.postalCode = attrs.postalCode;
    this.streetAddress = attrs.streetAddress;
  }

  id: number;
  city: string;
  postalCode: string;
  streetAddress: string;
}
