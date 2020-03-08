package pl.buczak.kacper.fleetmanagement.entity.dto.department;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.workshop.WorkshopDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

/*
    @author Kacper Buczak 
*/
public class RegionFullDTO extends BaseDTO {

    @NotNull
    private List<DepartmentDTO> department;

    @NotNull
    private List<WorkshopDTO> workshops;

    @NotBlank
    @Size(max = 30)
    private String regionName;

    public RegionFullDTO() {
    }

    public List<DepartmentDTO> getDepartment() {
        return department;
    }

    public void setDepartment(List<DepartmentDTO> department) {
        this.department = department;
    }

    public List<WorkshopDTO> getWorkshops() {
        return workshops;
    }

    public void setWorkshops(List<WorkshopDTO> workshops) {
        this.workshops = workshops;
    }

    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }
}
