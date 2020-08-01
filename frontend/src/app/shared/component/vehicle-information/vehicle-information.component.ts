import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../model/vehicle/vehicle';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.scss']
})
export class VehicleInformationComponent implements OnInit {
  @Input() vehicle: Vehicle;

  ngOnInit(): void {
  }
}
