package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;

import javax.persistence.*;
import javax.validation.constraints.Min;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "other_expense")
public class OtherExpense extends Expense {
    @ManyToOne
    @JoinColumn(name = "exploatation_report_id", referencedColumnName = "id")
    private ExploatationReport exploatationReport;

    @Min(value = 0)
    @Column(nullable = false, name = "item_count")
    private Integer itemCount;

    public OtherExpense() {
    }

    public ExploatationReport getExploatationReport() {
        return exploatationReport;
    }

    public void setExploatationReport(ExploatationReport exploatationReport) {
        this.exploatationReport = exploatationReport;
    }

    public Integer getItemCount() {
        return itemCount;
    }

    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    }
}
