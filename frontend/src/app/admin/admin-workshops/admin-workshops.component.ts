import {Component, OnInit} from '@angular/core';
import {Icon, latLng, Marker, marker, tileLayer} from 'leaflet';
import {Workshop} from '../../shared/model/workshop/workshop';
import {WorkshopService} from '../../shared/service/vehicle/workshop.service';

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
  options = {};
  mapMarkerLayers: Marker[] = [];

  constructor(private workshopService: WorkshopService) {
  }

  ngOnInit(): void {
    this.initializeLeafletMapOptions();
    this.initializeWorkshops();
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
    console.log(workshop);
  }

  private getTooltipMessage(workshop: Workshop): string {
    return workshop.workshopName;
  }

}
