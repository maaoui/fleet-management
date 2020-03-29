import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/model/vehicle';
import {VehicleService} from '../../shared/service/vehicle.service';

@Component({
  selector: 'app-admin-vehicles',
  templateUrl: './admin-vehicles.component.html',
  styleUrls: ['./admin-vehicles.component.scss']
})
export class AdminVehiclesComponent implements OnInit {
  private vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.loadVehiclesList();
  }

  private loadVehiclesList() {
    this
      .vehicleService
      .getVehiclesList()
      .subscribe(
        (vehicles) => {
          this.vehicles = vehicles;
          console.log(vehicles);
        },
        (error) => {
          // TODO Handle error - show error message
        }
      );
  }
}
