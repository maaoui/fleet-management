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

    @Size(max = 30)
    @Column(nullable = false, name = "region_name")
    private String regionName;

    @OneToMany(mappedBy = "region")
    private List<Department> department;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "region")
    private List<Workshop> workshops;

    public Region() {
    }

    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }

    public List<Department> getDepartment() {
        return department;
    }

    public void setDepartment(List<Department> department) {
        this.department = department;
    }

    public List<Workshop> getWorkshops() {
        return workshops;
    }

    public void setWorkshops(List<Workshop> workshops) {
        this.workshops = workshops;
    }
}
