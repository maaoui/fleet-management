package pl.buczak.kacper.fleetmanagement.entity.dao.employee;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Department;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.VehicleUsageTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.List;

/*
    @author Kacper Buczak
*/
@Entity
@Table(name = "employee")
public class Employee extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    private Department department;

    @OneToMany(cascade = CascadeType.DETACH, mappedBy = "employee")
    private List<VehicleUsageTimestamp> vehicleUsageTimestamp;

    @Size(max = 30)
    @Column(nullable = false, name = "first_name")
    private String firstName;

    @Size(max = 30)
    @Column(nullable = false, name = "last_name")
    private String lastName;

    @Size(max = 30)
    @Column(nullable = false, name = "email")
    private String email;

    @Size(max = 20)
    @Column(nullable = false, name = "phone_number")
    @Pattern(regexp = "[1-9][0-9]{8}")
    private String phoneNumber;

    private String password;
    private boolean enabled;
    private boolean tokenExpired;
    @ManyToMany
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"))
    private Collection<Role> roles;


    public Employee() {
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public List<VehicleUsageTimestamp> getVehicleUsageTimestamp() {
        return vehicleUsageTimestamp;
    }

    public void setVehicleUsageTimestamp(List<VehicleUsageTimestamp> vehicleUsageTimestamp) {
        this.vehicleUsageTimestamp = vehicleUsageTimestamp;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isTokenExpired() {
        return tokenExpired;
    }

    public void setTokenExpired(boolean tokenExpired) {
        this.tokenExpired = tokenExpired;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
}