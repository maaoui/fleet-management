package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.util.enums.FuelType;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/*
    @author Kacper Buczak 
*/
public class FuelExpenseDTO extends BaseExpenseDTO {

    @NotNull
    @Min(value = 0)
    private Double fuelAmount;

    @NotNull
    private FuelType fuelType;

    public FuelExpenseDTO() {
    }

    public Double getFuelAmount() {
        return fuelAmount;
    }

    public void setFuelAmount(Double fuelAmount) {
        this.fuelAmount = fuelAmount;
    }

    public FuelType getFuelType() {
        return fuelType;
    }

    public void setFuelType(FuelType fuelType) {
        this.fuelType = fuelType;
    }
}
