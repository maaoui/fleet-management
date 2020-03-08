package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.CarPartDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.workshop.WorkshopDTO;

import javax.validation.constraints.NotNull;

/*
    @author Kacper Buczak 
*/
public class ServiceExpenseDTO extends BaseExpenseDTO {

    @NotNull
    private WorkshopDTO workshop;

    @NotNull
    private CarPartDTO carPart;

    public ServiceExpenseDTO() {
    }

    public WorkshopDTO getWorkshop() {
        return workshop;
    }

    public void setWorkshop(WorkshopDTO workshop) {
        this.workshop = workshop;
    }

    public CarPartDTO getCarPart() {
        return carPart;
    }

    public void setCarPart(CarPartDTO carPart) {
        this.carPart = carPart;
    }
}
