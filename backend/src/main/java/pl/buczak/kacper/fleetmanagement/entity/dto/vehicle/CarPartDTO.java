package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
public class CarPartDTO extends BaseDTO {

    @NotBlank
    @Size(max = 30)
    private String partType;

    @NotBlank
    @Size(max = 30)
    private String name;

    @NotBlank
    @Size(max = 30)
    private String description;

    public CarPartDTO() {
    }

    public String getPartType() {
        return partType;
    }

    public void setPartType(String partType) {
        this.partType = partType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
