package pl.buczak.kacper.fleetmanagement.entity.dto.workshop;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.AddressDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.department.RegionDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
public class WorkshopDTO extends BaseDTO {

    @NotNull
    private RegionDTO region;

    @NotNull
    private AddressDTO address;

    @NotBlank
    @Size(max = 50)
    private String workshopName;

    @NotBlank
    @Size(max = 20)
    @Pattern(regexp = "[1-9][0-9]{8}")
    private String phoneNumber;

    @NotBlank
    @Size(max = 50)
    private String email;

    public WorkshopDTO() {
    }

    public RegionDTO getRegion() {
        return region;
    }

    public void setRegion(RegionDTO region) {
        this.region = region;
    }

    public AddressDTO getAddress() {
        return address;
    }

    public void setAddress(AddressDTO address) {
        this.address = address;
    }

    public String getWorkshopName() {
        return workshopName;
    }

    public void setWorkshopName(String workshopName) {
        this.workshopName = workshopName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
