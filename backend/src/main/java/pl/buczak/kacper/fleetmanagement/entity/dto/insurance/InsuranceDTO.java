package pl.buczak.kacper.fleetmanagement.entity.dto.insurance;

import com.fasterxml.jackson.annotation.JsonFormat;
import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.vehicle.VehicleDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

/*
    @author Kacper Buczak 
*/
public class InsuranceDTO extends BaseDTO {

    @NotNull
    private VehicleDTO vehicle;

    @NotBlank
    @Size(max = 100)
    private String companyName;

    @NotBlank
    @Size(max = 100)
    private String insuranceNumber;

    @NotBlank
    @Size(max = 20)
    @Pattern(regexp = "[1-9][0-9]{8}")
    private String contactNumber;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    public InsuranceDTO() {
    }

    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getInsuranceNumber() {
        return insuranceNumber;
    }

    public void setInsuranceNumber(String insuranceNumber) {
        this.insuranceNumber = insuranceNumber;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }
}
