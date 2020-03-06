package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/

@Table(name = "vehicle_owner")
@Entity
public class VehicleOwner extends BaseEntity {

    @OneToOne
    private Vehicle vehicle;

    @OneToOne
    private Address address;

    @Size(max = 100)
    @Column(nullable = false, name = "full_name")
    private String fullName;

    @Size(max = 20)
    @Column(nullable = false, name = "id_number")
    private String idNumber;

    public VehicleOwner() {
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
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
