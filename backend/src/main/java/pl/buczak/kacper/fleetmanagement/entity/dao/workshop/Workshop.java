package pl.buczak.kacper.fleetmanagement.entity.dao.workshop;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Region;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.ServiceExpense;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "workshop")
public class Workshop extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id")
    private Region region;

    @OneToMany(cascade = CascadeType.DETACH, mappedBy = "workshop")
    private List<ServiceExpense> serviceExpenses;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @Size(max = 50)
    @Column(nullable = false, name = "workshop_name")
    private String workshopName;

    @Size(max = 20)
    @Column(nullable = false, name = "phone_number")
    @Pattern(regexp = "[1-9][0-9]{8}")
    private String phoneNumber;

    @Size(max = 50)
    @Column(nullable = true, name = "email")
    private String email;


    public Workshop() {
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public List<ServiceExpense> getServiceExpenses() {
        return serviceExpenses;
    }

    public void setServiceExpenses(List<ServiceExpense> serviceExpenses) {
        this.serviceExpenses = serviceExpenses;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
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
