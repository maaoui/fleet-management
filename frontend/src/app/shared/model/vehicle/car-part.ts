import {PartType} from '../enums/part-type.enum';


export interface CarPartAttrs {
  id: number;
  partType: PartType;
  name: string;
  description: string;
}

export class CarPart {
  constructor(attrs: Partial<CarPartAttrs> = {}) {
    this.id = attrs.id;
    this.partType = attrs.partType;
    this.description = attrs.description;
    this.name = attrs.name;
  }

  id: number;
  partType: PartType;
  name: string;
  description: string;
}
