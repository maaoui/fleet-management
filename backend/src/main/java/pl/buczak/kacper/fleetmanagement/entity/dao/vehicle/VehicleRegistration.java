package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "vehicle_registration")
public class VehicleRegistration extends BaseEntity {

    @OneToOne
    private Vehicle vehicle;

    @OneToMany
    private List<TechnicalExamination> technicalExaminationList;


}
