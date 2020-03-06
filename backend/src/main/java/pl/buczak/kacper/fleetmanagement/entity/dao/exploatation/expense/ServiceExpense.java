package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;

import javax.persistence.*;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "service_expense")
public class ServiceExpense extends Expense {

    @ManyToOne
    @JoinColumn(name = "exploatation_report_id", referencedColumnName = "id")
    private ExploatationReport exploatationReport;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workshop_id")
    private Workshop workshop;

    @OneToOne
    private CarPart carPart;

    public ServiceExpense() {
    }

    public ExploatationReport getExploatationReport() {
        return exploatationReport;
    }

    public void setExploatationReport(ExploatationReport exploatationReport) {
        this.exploatationReport = exploatationReport;
    }

    public Workshop getWorkshop() {
        return workshop;
    }

    public void setWorkshop(Workshop workshop) {
        this.workshop = workshop;
    }

    public CarPart getCarPart() {
        return carPart;
    }

    public void setCarPart(CarPart carPart) {
        this.carPart = carPart;
    }
}
