package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;
import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
public class VehicleOwnerDTO extends BaseDTO {

    private Address address;

    @NotBlank
    @Size(max = 100)
    private String fullName;

    @NotBlank
    @Size(max = 20)
    private String idNumber;

    public VehicleOwnerDTO() {
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }
}
