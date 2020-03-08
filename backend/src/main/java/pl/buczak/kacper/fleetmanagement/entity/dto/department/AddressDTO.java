package pl.buczak.kacper.fleetmanagement.entity.dto.department;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
public class AddressDTO extends BaseDTO {

    @NotBlank
    @Size(max = 50)
    private String city;

    @NotBlank
    @Size(max = 10)
    private String postalCode;

    @NotBlank
    @Size(max = 50)
    private String streetAddress;

    public AddressDTO() {
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }
}
