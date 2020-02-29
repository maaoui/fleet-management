package pl.buczak.kacper.fleetmanagement.entity.dao.employee;

/*
    @author Kacper Buczak 
*/

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Department;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.VehicleUsageTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

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


}
