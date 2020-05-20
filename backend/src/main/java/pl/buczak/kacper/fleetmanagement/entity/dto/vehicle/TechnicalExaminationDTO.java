package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import com.fasterxml.jackson.annotation.JsonFormat;
import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.*;
import java.time.LocalDateTime;

/*
    @author Kacper Buczak 
*/
public class TechnicalExaminationDTO extends BaseDTO {

    @Future
    @NotNull
    private LocalDateTime nextExaminationDate;

    @NotNull
    @Min(value = 0)
    @Min(value = Integer.MAX_VALUE)
    private Integer currentKilometrage;

    @NotBlank
    @Size(max = 512)
    private String comment;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public LocalDateTime getNextExaminationDate() {
        return nextExaminationDate;
    }

    public void setNextExaminationDate(LocalDateTime nextExaminationDate) {
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
