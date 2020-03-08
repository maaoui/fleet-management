package pl.buczak.kacper.fleetmanagement.entity.dao;

import javax.persistence.*;
import java.io.Serializable;

/*
    @author Kacper Buczak 
*/

@MappedSuperclass
public class BaseEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return getClass().getCanonicalName() + " ID: " + this.getId();
    }
}
