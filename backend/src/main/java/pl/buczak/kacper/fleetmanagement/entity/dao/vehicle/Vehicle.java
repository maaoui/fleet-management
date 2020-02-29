package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "vehicle")
public class Vehicle extends BaseEntity {

    @OneToMany(cascade = CascadeType.DETACH, mappedBy = "vehicle")
    private List<VehicleUsageTimestamp> vehicleUsageTimestamps;

}
