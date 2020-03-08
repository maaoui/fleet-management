package pl.buczak.kacper.fleetmanagement.entity.dto.department;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
public class RegionDTO extends BaseDTO {

    @NotBlank
    @Size(max = 30)
    private String regionName;

    public RegionDTO() {
    }

    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }
}
