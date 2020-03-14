package pl.buczak.kacper.fleetmanagement.entity.dao.employee;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Collection;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "privilege")
public class Privilege extends BaseEntity {

    private String name;

    @ManyToMany(mappedBy = "privileges")
    private Collection<Role> roles;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
}