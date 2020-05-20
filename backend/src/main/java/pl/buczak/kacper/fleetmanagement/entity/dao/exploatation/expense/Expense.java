package pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.Currency;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
@MappedSuperclass
public class Expense extends BaseEntity {

    @Min(value = 0)
    @Column(nullable = false, name = "value")
    private Double value;

    @Column(nullable = false, name = "date")
    private Date date;

    @Column(nullable = false, name = "currency")
    private Currency currency;

    @Size(min = 0, max = 1000)
    @Column(nullable = false, name = "comment")
    private String comment;

    @Column(nullable = false, name = "current_kilometrage")
    private Integer currentKilometrage;

    public Expense() {
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getCurrentKilometrage() {
        return currentKilometrage;
    }

    public void setCurrentKilometrage(Integer currentKilometrage) {
        this.currentKilometrage = currentKilometrage;
    }
}
