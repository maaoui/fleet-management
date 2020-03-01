package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "technical_examination")
public class TechnicalExamination extends BaseEntity {

    @ManyToOne
    private VehicleRegistration vehicleRegistration;

}
