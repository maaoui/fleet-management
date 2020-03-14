package pl.buczak.kacper.fleetmanagement.entity.dao.employee;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.*;
import java.util.Collection;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "role")
public class Role extends BaseEntity {

    private String name;

    @ManyToMany(mappedBy = "roles")
    private Collection<Employee> employees;

    @ManyToMany
    @JoinTable(
            name = "roles_privileges",
            joinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "privilege_id", referencedColumnName = "id"))
    private Collection<Privilege> privileges;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(Collection<Employee> employees) {
        this.employees = employees;
    }

    public Collection<Privilege> getPrivileges() {
        return privileges;
    }

    public void setPrivileges(Collection<Privilege> privileges) {
        this.privileges = privileges;
    }
}