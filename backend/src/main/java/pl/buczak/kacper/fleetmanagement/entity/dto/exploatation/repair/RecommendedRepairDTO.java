package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.repair;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.CarPartDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleDTO;

import javax.validation.constraints.*;

/*
    @author Kacper Buczak 
*/
public class RecommendedRepairDTO extends BaseDTO {

    @NotNull
    private VehicleDTO vehicle;

    @NotNull
    private CarPartDTO carPart;

    @NotNull
    @Min(value = 0)
    @Max(value = Integer.MAX_VALUE)
    private Integer repairInterval;

    @NotBlank
    @Size(max = 2048)
    private String comment;

    public RecommendedRepairDTO() {
    }

    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }

    public CarPartDTO getCarPart() {
        return carPart;
    }

    public void setCarPart(CarPartDTO carPart) {
        this.carPart = carPart;
    }

    public Integer getRepairInterval() {
        return repairInterval;
    }

    public void setRepairInterval(Integer repairInterval) {
        this.repairInterval = repairInterval;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
