package pl.buczak.kacper.fleetmanagement.entity.dao.department;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

/*
    @author Kacper Buczak 
*/

@Entity
@Table(name = "region")
public class Region extends BaseEntity {

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "region")
    private List<Workshop> workshops;

    @Size(max = 30)
    @Column(nullable = false, name = "region_name")
    private String regionName;

    @OneToMany(mappedBy = "region")
    private List<Department> department;

}
