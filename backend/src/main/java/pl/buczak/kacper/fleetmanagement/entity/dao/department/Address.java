package pl.buczak.kacper.fleetmanagement.entity.dao.department;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;

import javax.persistence.*;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "address")
public class Address extends BaseEntity {

    @OneToOne(mappedBy = "address", fetch = FetchType.LAZY)
    private Workshop workshop;

    @OneToOne(mappedBy = "address", fetch = FetchType.LAZY)
    private Department department;

    @Size(max = 50)
    @Column(nullable = false, name = "city")
    private String city;

    @Size(max = 10)
    @Column(nullable = false, name = "postal_code")
    private String postalCode;

    @Size(max = 50)
    @Column(nullable = false, name = "address")
    private String streetAddress;

    public Address() {
    }

    public Workshop getWorkshop() {
        return workshop;
    }

    public void setWorkshop(Workshop workshop) {
        this.workshop = workshop;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
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
