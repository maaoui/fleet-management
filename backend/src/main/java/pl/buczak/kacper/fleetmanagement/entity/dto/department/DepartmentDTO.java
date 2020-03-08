package pl.buczak.kacper.fleetmanagement.entity.dto.department;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
public class DepartmentDTO extends BaseDTO {

    @NotNull
    private AddressDTO address;

    @NotNull
    private RegionDTO region;

    @NotBlank
    @Size(max = 50)
    private String departmentName;

    public DepartmentDTO() {
    }

    public AddressDTO getAddress() {
        return address;
    }

    public void setAddress(AddressDTO address) {
        this.address = address;
    }

    public RegionDTO getRegion() {
        return region;
    }

    public void setRegion(RegionDTO region) {
        this.region = region;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
