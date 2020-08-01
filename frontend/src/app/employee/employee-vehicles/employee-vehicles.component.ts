import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {VehicleService} from '../../shared/service/vehicle/vehicle.service';

@Component({
  selector: 'app-employee-vehicles',
  templateUrl: './employee-vehicles.component.html',
  styleUrls: ['./employee-vehicles.component.scss']
})
export class EmployeeVehiclesComponent implements OnInit {
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.loadVehiclesList();
  }

  loadVehiclesList() {
    this.vehicleService
      .getVehiclesList()
      .subscribe((vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
      });
  }
}
