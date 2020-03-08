package pl.buczak.kacper.fleetmanagement.entity.dto.department;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

/*
    @author Kacper Buczak 
*/
public class DepartmentFullDTO extends BaseDTO {

    @NotNull
    private AddressDTO address;

    @NotNull
    private RegionDTO region;

    @NotNull
    private List<EmployeeDTO> employees;

    @NotBlank
    @Size(max = 50)
    private String departmentName;

    public DepartmentFullDTO() {
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

    public List<EmployeeDTO> getEmployees() {
        return employees;
    }

    public void setEmployees(List<EmployeeDTO> employees) {
        this.employees = employees;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
