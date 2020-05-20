package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.*;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
public class TechnicalExaminationDTO extends BaseDTO {

    @Future
    @NotNull
    private Date nextExaminationDate;

    @NotNull
    @Min(value = 0)
    @Min(value = Integer.MAX_VALUE)
    private Integer currentKilometrage;

    @NotBlank
    @Size(max = 512)
    private String comment;

    public Date getNextExaminationDate() {
        return nextExaminationDate;
    }

    public void setNextExaminationDate(Date nextExaminationDate) {
        this.nextExaminationDate = nextExaminationDate;
    }

    public Integer getCurrentKilometrage() {
        return currentKilometrage;
    }

    public void setCurrentKilometrage(Integer currentKilometrage) {
        this.currentKilometrage = currentKilometrage;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
