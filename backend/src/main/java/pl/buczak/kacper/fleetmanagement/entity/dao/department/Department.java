package pl.buczak.kacper.fleetmanagement.entity.dao.department;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "department")
public class Department extends BaseEntity {

    @Size(max = 50)
    @Column(nullable = false, name = "department_name")
    private String departmentName;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id", referencedColumnName = "id")
    private Region region;


}
