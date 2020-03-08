package pl.buczak.kacper.fleetmanagement.entity.dto.exploatation.expense;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.Currency;

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
    private LocalDateTime date;

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

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
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
