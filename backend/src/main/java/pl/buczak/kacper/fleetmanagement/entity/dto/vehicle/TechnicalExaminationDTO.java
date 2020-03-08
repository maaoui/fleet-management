package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

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
}
