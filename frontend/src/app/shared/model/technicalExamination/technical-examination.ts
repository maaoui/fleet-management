import {Vehicle} from '../vehicle/vehicle';
import {BaseEntity, BaseEntityAttrs} from '../base-entity';

export interface TechnicalExaminationAttrs extends BaseEntityAttrs {
  vehicle: Vehicle;
  nextExaminationDate: Date;
  examinationDate: Date;
  currentKilometrage: number;
  comment: string;
}

export class TechnicalExamination extends BaseEntity {
  constructor(attrs: Partial<TechnicalExaminationAttrs> = {}) {
    super(attrs);
    this.vehicle = attrs.vehicle;
    this.nextExaminationDate = attrs.nextExaminationDate;
    this.examinationDate = attrs.examinationDate;
    this.currentKilometrage = attrs.currentKilometrage;
    this.comment = attrs.comment;
  }

  vehicle: Vehicle;
  nextExaminationDate: Date;
  examinationDate: Date;
  currentKilometrage: number;
  comment: string;

}
