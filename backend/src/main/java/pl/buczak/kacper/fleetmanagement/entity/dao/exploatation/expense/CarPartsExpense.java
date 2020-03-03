package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "car_parts_expense")
public class CarPartsExpense extends Expense {

    @ManyToOne
    @JoinColumn(name = "exploatation_report_id", referencedColumnName = "id")
    private ExploatationReport exploatationReport;

    @ManyToOne(fetch = FetchType.LAZY)
    private CarPart carPart;

    public CarPartsExpense() {
    }

    public ExploatationReport getExploatationReport() {
        return exploatationReport;
    }

    public void setExploatationReport(ExploatationReport exploatationReport) {
        this.exploatationReport = exploatationReport;
    }

    public CarPart getCarPart() {
        return carPart;
    }

    public void setCarPart(CarPart carPart) {
        this.carPart = carPart;
    }
}
