package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "service_expense")
public class ServiceExpense extends Expense {

    @ManyToOne
    @JoinColumn(name = "exploatation_report_id", referencedColumnName = "id")
    private ExploatationReport exploatationReport;
}
