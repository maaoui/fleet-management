package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.CarPartExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.FuelExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.OtherExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.ServiceExpense;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
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
    private List<CarPartExpense> carPartsExpenses;

    @OneToMany(mappedBy = "exploatationReport")
    private List<ServiceExpense> serviceExpenses;

    @OneToMany(mappedBy = "exploatationReport")
    private List<OtherExpense> otherExpenses;

    public ExploatationReport() {

    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public List<FuelExpense> getFuelExpenses() {
        return fuelExpenses;
    }

    public void setFuelExpenses(List<FuelExpense> fuelExpenses) {
        this.fuelExpenses = fuelExpenses;
    }

    public List<CarPartExpense> getCarPartsExpenses() {
        return carPartsExpenses;
    }

    public void setCarPartsExpenses(List<CarPartExpense> carPartsExpenses) {
        this.carPartsExpenses = carPartsExpenses;
    }

    public List<ServiceExpense> getServiceExpenses() {
        return serviceExpenses;
    }

    public void setServiceExpenses(List<ServiceExpense> serviceExpenses) {
        this.serviceExpenses = serviceExpenses;
    }

    public List<OtherExpense> getOtherExpenses() {
        return otherExpenses;
    }

    public void setOtherExpenses(List<OtherExpense> otherExpenses) {
        this.otherExpenses = otherExpenses;
    }
}
