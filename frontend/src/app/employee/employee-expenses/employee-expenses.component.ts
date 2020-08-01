import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {ExploitationReport} from '../../shared/model/exploitation/exploitation-report';
import {ExploitationService} from '../../shared/service/exploitation/exploitation.service';
import {VehicleService} from '../../shared/service/vehicle/vehicle.service';

@Component({
  selector: 'app-employee-expenses',
  templateUrl: './employee-expenses.component.html',
  styleUrls: ['./employee-expenses.component.scss']
})
export class EmployeeExpensesComponent implements OnInit {
  currentComponentName: string;
  exploitationReport: ExploitationReport;
  selectedVehicle: Vehicle;
  vehicles: Vehicle[];
  private isVehicleSelected: boolean;
  private readonly canDeleteExpenses = false;

  constructor(private exploitationService: ExploitationService, private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.initializeVehicles();
  }

  changeCurrentComponent(componentName: string) {
    this.currentComponentName = componentName;
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

  getVehicleShortInformation(vehicle: Vehicle) {
    return `${vehicle.make} ${vehicle.model} [${vehicle.plateNumber}]`;
  }

  private initializeVehicles() {
    this.vehicleService
      .getVehiclesList()
      .subscribe((vehicles: Vehicle[]) => {
          this.vehicles = vehicles;
        }
      );
  }
}
