package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.repair;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.*;

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
}
