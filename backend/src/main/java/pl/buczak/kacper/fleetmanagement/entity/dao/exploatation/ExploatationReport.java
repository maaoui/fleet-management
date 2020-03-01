package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.CarPartsExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.FuelExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.OtherExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.ServiceExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.*;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "exploatation_report")
public class ExploatationReport extends BaseEntity {

    @OneToOne
    private Vehicle vehicle;

    @OneToMany(mappedBy = "exploatationReport")
    private List<FuelExpense> fuelExpenses;

    @OneToMany(mappedBy = "exploatationReport")
    private List<CarPartsExpense> carPartsExpenses;

    @OneToMany(mappedBy = "exploatationReport")
    private List<ServiceExpense> serviceExpenses;

    @OneToMany(mappedBy = "exploatationReport")
    private List<OtherExpense> otherExpenses;
}
