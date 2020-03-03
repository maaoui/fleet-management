package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.repair;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "recommended_repair")
public class RecommendedRepair extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", referencedColumnName = "id")
    private Vehicle vehicle;

    @OneToOne
    private CarPart carPart;

    @Min(value = 0)
    @Max(value = Integer.MAX_VALUE)
    @Column(nullable = false, name = "repair_interval")
    private Integer repairInterval;

    @Size(max = 2048)
    @Column(name = "comment")
    private String comment;

    public RecommendedRepair() {
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public CarPart getCarPart() {
        return carPart;
    }

    public void setCarPart(CarPart carPart) {
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
