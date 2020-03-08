package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.CarPartDTO;

import javax.validation.constraints.NotNull;

/*
    @author Kacper Buczak 
*/
public class CarPartExpenseDTO extends BaseExpenseDTO {

    @NotNull
    private CarPartDTO carPart;

    public CarPartExpenseDTO() {
    }

    public CarPartDTO getCarPart() {
        return carPart;
    }

    public void setCarPart(CarPartDTO carPart) {
        this.carPart = carPart;
    }
}
