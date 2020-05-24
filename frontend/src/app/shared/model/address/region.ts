import {BaseEntity, BaseEntityAttrs} from '../base-entity';


export interface RegionAttrs extends BaseEntityAttrs {
  regionName: string;
}

export class Region extends BaseEntity {
  constructor(attrs: Partial<RegionAttrs> = {}) {
    super(attrs);
    this.regionName = attrs.regionName;
  }

  regionName: string;
}


