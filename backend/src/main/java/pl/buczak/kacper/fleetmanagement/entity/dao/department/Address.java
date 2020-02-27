package pl.buczak.kacper.fleetmanagement.entity.dao.department;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "address")
public class Address extends BaseEntity {

    @Size(max = 50)
    @Column(nullable = false, name = "city")
    private String city;

    @Size(max = 10)
    @Column(nullable = false, name = "postal_code")
    private String postalCode;

    @Size(max = 50)
    @Column(nullable = false, name = "address")
    private String address;

    @OneToOne(mappedBy = "address")
    private Workshop workshop;

    @OneToOne(mappedBy = "address")
    private Department department;

}
