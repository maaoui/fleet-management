import {Component, Input, OnInit} from '@angular/core';
import {Workshop} from '../../../shared/model/workshop/workshop';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegionService} from '../../../shared/service/department/region.service';
import {Region} from '../../../shared/model/address/region';
import {AddressValidatorConstants, WorkshopValidatorConstants} from '../../../core/constants/validator-constants';

@Component({
  selector: 'app-workshop-editing-modal',
  templateUrl: './workshop-editing-modal.component.html',
  styleUrls: ['./workshop-editing-modal.component.scss']
})
export class WorkshopEditingModalComponent implements OnInit {

  @Input() workshop: Workshop;
  @Input() isEditMode: boolean;
  private workshopForm: FormGroup;
  private regions: Region[];

  constructor(public activeModal: NgbActiveModal,
              private regionService: RegionService) {
  }

  ngOnInit(): void {
    this.initializeRegions();
    this.initializeWorkshopForm();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSaveWorkshopPress() {
    this.isEditMode ? this.saveEditedWorkshop() : this.createWorkshop();
  }

  private saveEditedWorkshop() {
  }

  private createWorkshop() {

  }

  private initializeWorkshopForm() {
    this.workshopForm = new FormGroup({
      email: new FormControl(this.workshop.email,
        Validators.compose([
          Validators.maxLength(WorkshopValidatorConstants.EMAIL_MAX_LENGTH)
        ])),
      phoneNumber: new FormControl(this.workshop.phoneNumber,
        Validators.compose([
          Validators.maxLength(WorkshopValidatorConstants.EMAIL_MAX_LENGTH),
          Validators.pattern(WorkshopValidatorConstants.PHONE_NUMBER_PATTERN)
        ])),
      workshopName: new FormControl(this.workshop.workshopName,
        Validators.compose([
          Validators.maxLength(WorkshopValidatorConstants.NAME_MAX_LENGTH)
        ])),
      longitude: new FormControl(this.workshop.longitude,
        Validators.compose([
          Validators.min(WorkshopValidatorConstants.LONGITUDE_MIN_VALUE),
          Validators.max(WorkshopValidatorConstants.LONGITUDE_MAX_VALUE)
        ])),
      latitude: new FormControl(this.workshop.latitude,
        Validators.compose([
          Validators.min(WorkshopValidatorConstants.LATITUDE_MIN_VALUE),
          Validators.max(WorkshopValidatorConstants.LATITUDE_MAX_VALUE)
        ])),
      region: new FormControl(this.workshop.region),
      address: new FormGroup({
        id: new FormControl(this.workshop.address.id),
        city: new FormControl(this.workshop.address.city,
          Validators.compose([
            Validators.maxLength(AddressValidatorConstants.CITY_MAX_LENGTH)
          ])),
        postalCode: new FormControl(this.workshop.address.postalCode,
          Validators.compose([
            Validators.maxLength(AddressValidatorConstants.POSTAL_CODE_MAX_LENGTH)
          ])),
        streetAddress: new FormControl(this.workshop.address.streetAddress,
          Validators.compose([
            Validators.maxLength(AddressValidatorConstants.STREET_ADDRESS_NAME_MAX_LENGTH)
          ])),
      })
    });
  }

  private initializeRegions() {
    this.regionService
      .getRegionsList()
      .subscribe((regions: Region[]) => {
        this.regions = regions;
        this.workshop.region = regions[0];
      });
  }
}
