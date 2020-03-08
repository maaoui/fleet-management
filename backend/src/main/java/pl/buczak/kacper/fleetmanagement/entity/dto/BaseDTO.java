package pl.buczak.kacper.fleetmanagement.entity.dto;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

/*
    @author Kacper Buczak 
*/
public abstract class BaseDTO implements Serializable {

    @NotNull
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
