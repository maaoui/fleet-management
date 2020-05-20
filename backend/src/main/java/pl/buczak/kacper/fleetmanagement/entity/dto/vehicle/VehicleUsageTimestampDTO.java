package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import com.sun.istack.NotNull;
import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;

import java.util.Date;

/*
    @author Kacper Buczak 
*/
public class VehicleUsageTimestampDTO extends BaseDTO {

    @NotNull
    private EmployeeDTO employee;

    @NotNull
    private VehicleDTO vehicle;

    @NotNull
    private Date startDateTime;

    @NotNull
    private Date endDateTime;

    public VehicleUsageTimestampDTO() {
    }

    public EmployeeDTO getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeDTO employee) {
        this.employee = employee;
    }

    public VehicleDTO getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDTO vehicle) {
        this.vehicle = vehicle;
    }

    public Date getStartDateTime() {
        return startDateTime;
    }

    public void setStartDateTime(Date startDateTime) {
        this.startDateTime = startDateTime;
    }

    public Date getEndDateTime() {
        return endDateTime;
    }

    public void setEndDateTime(Date endDateTime) {
        this.endDateTime = endDateTime;
    }
}
