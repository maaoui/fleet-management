import {Component, OnInit} from '@angular/core';
import {latLng, tileLayer} from 'leaflet';

export class DefaultMapConstants {
  public static readonly DEFAULT_COORDINATES = {
    LATITUDE: 52.114503,
    LONGITUDE: 19.423561
  };
  public static readonly MAP_URL_TEMPLATE: string = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  public static readonly DEFAULT_ZOOM: number = 6;
  public static readonly MAX_ZOOM_VALUE: number = 18;

}

@Component({
  selector: 'app-admin-workshops',
  templateUrl: './admin-workshops.component.html',
  styleUrls: ['./admin-workshops.component.scss']
})
export class AdminWorkshopsComponent implements OnInit {
  options = {
    layers: [
      tileLayer(DefaultMapConstants.MAP_URL_TEMPLATE, {
        maxZoom: DefaultMapConstants.MAX_ZOOM_VALUE,
        attribution: '...'
      })
    ],
    zoom: DefaultMapConstants.DEFAULT_ZOOM,
    center: latLng(DefaultMapConstants.DEFAULT_COORDINATES.LATITUDE, DefaultMapConstants.DEFAULT_COORDINATES.LONGITUDE)
  };

  /*
    layersControl = {
      baseLayers: {
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'}),
        'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
      },
      overlays: {
        'Big Circle': circle([46.95, -122], {radius: 5000}),
        'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
      }
    };*/

  constructor() {
  }

  ngOnInit(): void {
  }


}
