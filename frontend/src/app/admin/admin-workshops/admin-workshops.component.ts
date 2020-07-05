import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Icon, latLng, Marker, marker, tileLayer} from 'leaflet';
import {Workshop} from '../../shared/model/workshop/workshop';
import {WorkshopService} from '../../shared/service/vehicle/workshop.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constraint} from '../../shared/constraints/constraint';
import {WorkshopEditingModalComponent} from '../modals/workshop-editing-modal/workshop-editing-modal.component';
import {Address} from '../../shared/model/address/address';
import {Region} from '../../shared/model/address/region';
import {first} from 'rxjs/operators';

export class DefaultMapConstants {
  public static readonly DEFAULT_COORDINATES = {
    LATITUDE: 52.114503,
    LONGITUDE: 19.423561
  };
  public static readonly MAP_URL_TEMPLATE: string = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  public static readonly DEFAULT_ZOOM: number = 6;
  public static readonly MAX_ZOOM_VALUE: number = 18;
  public static readonly MARKER_URL: string = 'assets/img/markers/marker-icon.png';
  public static readonly MARKER_SHADOW_URL: string = 'assets/img/markers/marker-shadow.png';
}

@Component({
  selector: 'app-admin-workshops',
  templateUrl: './admin-workshops.component.html',
  styleUrls: ['./admin-workshops.component.scss']
})
export class AdminWorkshopsComponent implements OnInit {
  private workshops: Workshop[] = [];
  chosenWorkshop: Workshop = null;
  options = {};
  mapMarkerLayers: Marker[] = [];

  constructor(private workshopService: WorkshopService,
              private ref: ChangeDetectorRef,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.initializeLeafletMapOptions();
    this.initializeWorkshops();
  }

  onEditWorkshopPress() {
    const workshop = new Workshop({...this.chosenWorkshop});
    const modalRef = this.modalService.open(WorkshopEditingModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.isEditMode = true;
    modalRef.componentInstance.workshop = workshop;
    modalRef.componentInstance
      .updateEmitter
      .pipe(first())
      .subscribe(() => {
        this.initializeWorkshops();
      });
  }

  onAddWorkshopPress() {
    const modalRef = this.modalService.open(WorkshopEditingModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.isEditMode = false;
    modalRef.componentInstance.workshop = new Workshop({
      address: new Address(),
      region: new Region()
    });
    modalRef.componentInstance
      .updateEmitter
      .pipe(first())
      .subscribe(() => {
        this.initializeWorkshops();
      });
  }

  private initializeLeafletMapOptions() {
    this.options = {
      layers: [
        tileLayer(DefaultMapConstants.MAP_URL_TEMPLATE, {
          maxZoom: DefaultMapConstants.MAX_ZOOM_VALUE,
          attribution: '...'
        })
      ],
      zoom: DefaultMapConstants.DEFAULT_ZOOM,
      center: latLng(DefaultMapConstants.DEFAULT_COORDINATES.LATITUDE, DefaultMapConstants.DEFAULT_COORDINATES.LONGITUDE)
    };
  }

  private initializeWorkshops() {
    this.workshopService
      .getWorkshopsList()
      .subscribe((workshops: Workshop[]) => {
        this.workshops = workshops;
        this.mapMarkerLayers = this.getMapLayerMarkersFromWorkshops(workshops);
      });
  }

  private getMapLayerMarkersFromWorkshops(workshops: Workshop[]): Marker[] {
    const markerIcon = new Icon({
      iconUrl: DefaultMapConstants.MARKER_URL,
      shadowUrl: DefaultMapConstants.MARKER_SHADOW_URL
    });
    return workshops
      .map((workshop: Workshop) =>
        marker([workshop.latitude, workshop.longitude], {icon: markerIcon})
          .on('click', () => this.onClickMarkerEvent(workshop))
          .bindTooltip(() => this.getTooltipMessage(workshop))
      );
  }

  private onClickMarkerEvent(workshop: Workshop) {
    this.chosenWorkshop = new Workshop({...workshop});
    this.ref.detectChanges();
  }

  private getTooltipMessage(workshop: Workshop): string {
    return workshop.workshopName;
  }


}
