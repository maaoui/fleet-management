package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.repair;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.*;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "repair")
public class Repair extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", referencedColumnName = "id")
    private Vehicle vehicle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car_part_id", referencedColumnName = "id")
    private CarPart carPart;
}
