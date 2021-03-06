package pl.buczak.kacper.fleetmanagement.entity.dao.insurance;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "insurance")
public class Insurance extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    private Vehicle vehicle;

    @Size(max = 100)
    @Column(nullable = false, name = "company_name")
    private String companyName;

    @Size(max = 100)
    @Column(nullable = false, name = "insurance_number")
    private String insuranceNumber;

    @Size(max = 20)
    @Column(nullable = false, name = "contact_number")
    @Pattern(regexp = "[1-9][0-9]{8}")
    private String contactNumber;

    @Column(nullable = false, name = "start_date")
    private Date startDate;

    @Column(nullable = false, name = "end_date")
    private Date endDate;

    public Insurance() {
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
