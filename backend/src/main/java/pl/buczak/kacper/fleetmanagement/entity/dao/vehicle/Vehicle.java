package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.insurance.Insurance;

import javax.persistence.*;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "vehicle")
public class Vehicle extends BaseEntity {

    @OneToMany(cascade = CascadeType.DETACH, mappedBy = "vehicle")
    private List<VehicleUsageTimestamp> vehicleUsageTimestamps;

    @OneToOne
    private VehicleRegistration vehicleRegistration;

    @OneToOne
    private ExploatationReport exploatationReport;

    @OneToOne
    private Insurance insurance;
}
