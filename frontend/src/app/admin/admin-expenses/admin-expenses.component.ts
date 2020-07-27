import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../shared/service/vehicle/vehicle.service';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {ExploitationService} from '../../shared/service/exploitation/exploitation.service';
import {ExploitationReport} from '../../shared/model/exploitation/exploitation-report';

@Component({
  selector: 'app-admin-expenses',
  templateUrl: './admin-expenses.component.html',
  styleUrls: ['./admin-expenses.component.scss']
})
export class AdminExpensesComponent implements OnInit {
  private vehicles: Vehicle[];
  private exploitationReport: ExploitationReport;
  private currentComponentName: string;
  private isVehicleSelected = false;
  private selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleService,
              private exploitationService: ExploitationService) {
  }

  ngOnInit(): void {
    this.initializeVehicles();
  }

  private initializeVehicles() {
    this.vehicleService
      .getVehiclesList()
      .subscribe((vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
      });
  }


  getVehicleShortInformation(vehicle: Vehicle) {
    return `${vehicle.make} ${vehicle.model} [${vehicle.plateNumber}]`;
  }

  getVehicleExploatationData(vehicleId) {
    this.exploitationService
      .getExploitationReportByVehicleId(vehicleId)
      .subscribe(exploitationReport => {
          this.exploitationReport = exploitationReport;
          this.selectedVehicle = exploitationReport.vehicle;
          this.isVehicleSelected = true;
        }
      );
  }

  changeCurrentComponent(componentName: string) {
    this.currentComponentName = componentName;
    if (this.selectedVehicle) {
      this.getVehicleExploatationData(this.selectedVehicle.id);
    }
  }

}
