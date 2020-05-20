package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.validation.constraints.*;
import java.util.Currency;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
public abstract class BaseExpenseDTO extends BaseEntity {

    @NotNull
    @Min(value = 0)
    private Double value;

    @NotNull
    private Currency currency;

    @NotNull
    @PastOrPresent
    private Date date;

    @NotBlank
    @Size(min = 0, max = 1000)
    private String comment;

    @NotNull
    private Integer currentKilometrage;

    public BaseExpenseDTO() {
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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
