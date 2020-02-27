package pl.buczak.kacper.fleetmanagement.entity.dao.workshop;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Region;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "workshop")
public class Workshop extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id")
    private Region region;

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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

}
