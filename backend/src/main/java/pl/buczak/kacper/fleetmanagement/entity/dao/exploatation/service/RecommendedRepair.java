package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.service;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "recommended_repair")
public class RecommendedRepair extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    private Vehicle vehicle;

}
