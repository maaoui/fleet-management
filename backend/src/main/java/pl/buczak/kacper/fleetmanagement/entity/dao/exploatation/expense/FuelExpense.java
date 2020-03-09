package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.util.enums.FuelType;

import javax.persistence.*;
import javax.validation.constraints.Min;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "fuel_expense")
public class FuelExpense extends Expense {

    @ManyToOne
    @JoinColumn(name = "exploatation_report_id", referencedColumnName = "id")
    private ExploatationReport exploatationReport;

    @Min(value = 0)
    @Column(nullable = false, name = "fuel_amount")
    private Double fuelAmount;

    @Min(value = 0)
    @Column(nullable = false, name = "fuel_type")
    private FuelType fuelType;

    public FuelExpense() {
    }

    public ExploatationReport getExploatationReport() {
        return exploatationReport;
    }

    public void setExploatationReport(ExploatationReport exploatationReport) {
        this.exploatationReport = exploatationReport;
    }

    public Double getFuelAmount() {
        return fuelAmount;
    }

    public void setFuelAmount(Double fuelAmount) {
        this.fuelAmount = fuelAmount;
    }

    public FuelType getFuelType() {
        return fuelType;
    }

    public void setFuelType(FuelType fuelType) {
        this.fuelType = fuelType;
    }
}
