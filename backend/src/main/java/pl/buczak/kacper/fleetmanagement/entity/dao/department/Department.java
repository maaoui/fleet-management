package pl.buczak.kacper.fleetmanagement.entity.dao.department;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "department")
public class Department extends BaseEntity {

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id", referencedColumnName = "id")
    private Region region;

    @OneToMany(cascade = CascadeType.DETACH, mappedBy = "department")
    private List<Employee> employees;

    @Size(max = 50)
    @Column(nullable = false, name = "department_name")
    private String departmentName;

    public Department() {
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
