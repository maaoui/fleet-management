package pl.buczak.kacper.fleetmanagement.entity.dao.insurance;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "insurance")
public class Insurance extends BaseEntity {

    @OneToOne
    private Vehicle vehicle;
}
