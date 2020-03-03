package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Size;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "car_part")
public class CarPart extends BaseEntity {
    @Size(max = 30)
    @Column(nullable = false, name = "part_type")
    private String partType;
    @Size(max = 30)
    @Column(nullable = false, name = "name")
    private String name;
    @Size(max = 30)
    @Column(nullable = false, name = "description")
    private String description;

    public CarPart() {
    }

    public String getPartType() {
        return partType;
    }

    public void setPartType(String partType) {
        this.partType = partType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
