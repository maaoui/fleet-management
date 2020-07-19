import {BaseEntity, BaseEntityAttrs} from '../base-entity';


export interface RoleAttrs extends BaseEntityAttrs {
  name: string;
}

export class Role extends BaseEntity {
  constructor(attrs: Partial<RoleAttrs> = {}) {
    super(attrs);
    this.name = attrs.name;
  }

  name: string;
}
