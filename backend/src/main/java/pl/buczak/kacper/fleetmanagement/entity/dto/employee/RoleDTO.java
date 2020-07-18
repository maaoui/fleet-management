package pl.buczak.kacper.fleetmanagement.entity.dto.employee;

import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;

/*
    @author Kacper Buczak 
*/
public class RoleDTO extends BaseDTO {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
