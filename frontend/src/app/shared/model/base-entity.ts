export interface BaseEntityAttrs {
  id: number;
}

export class BaseEntity {
  constructor(attrs: Partial<BaseEntityAttrs> = {}) {
    this.id = attrs.id;
  }

  id: number;
}

