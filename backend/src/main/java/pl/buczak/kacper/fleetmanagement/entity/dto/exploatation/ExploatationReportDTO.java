package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.CarPartExpenseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.FuelExpenseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.OtherExpenseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense.ServiceExpenseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleDTO;

import javax.validation.constraints.NotNull;
import java.util.List;

/*
    @author Kacper Buczak 
*/
public class ExploatationReportDTO extends BaseDTO {

    @NotNull
    private VehicleDTO vehicle;

    @NotNull
    private List<FuelExpenseDTO> fuelExpenses;

    @NotNull
    private List<CarPartExpenseDTO> carPartsExpenses;

    @NotNull
    private List<ServiceExpenseDTO> serviceExpenses;

    @NotNull
    private List<OtherExpenseDTO> otherExpenses;

    public ExploatationReportDTO() {
    }

    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }

    public List<FuelExpenseDTO> getFuelExpenses() {
        return fuelExpenses;
    }

    public void setFuelExpenses(List<FuelExpenseDTO> fuelExpenses) {
        this.fuelExpenses = fuelExpenses;
    }

    public List<CarPartExpenseDTO> getCarPartsExpenses() {
        return carPartsExpenses;
    }

    public void setCarPartsExpenses(List<CarPartExpenseDTO> carPartsExpenses) {
        this.carPartsExpenses = carPartsExpenses;
    }

    public List<ServiceExpenseDTO> getServiceExpenses() {
        return serviceExpenses;
    }

    public void setServiceExpenses(List<ServiceExpenseDTO> serviceExpenses) {
        this.serviceExpenses = serviceExpenses;
    }

    public List<OtherExpenseDTO> getOtherExpenses() {
        return otherExpenses;
    }

    public void setOtherExpenses(List<OtherExpenseDTO> otherExpenses) {
        this.otherExpenses = otherExpenses;
    }
}
