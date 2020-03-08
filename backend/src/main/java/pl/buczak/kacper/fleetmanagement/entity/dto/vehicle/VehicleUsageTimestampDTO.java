package pl.buczak.kacper.fleetmanagement.entity.dto.vehicle;

import com.sun.istack.NotNull;
import pl.buczak.kacper.fleetmanagement.entity.dto.BaseDTO;
import pl.buczak.kacper.fleetmanagement.entity.dto.employee.EmployeeDTO;

import java.time.LocalDateTime;

/*
    @author Kacper Buczak 
*/
public class VehicleUsageTimestampDTO extends BaseDTO {

    @NotNull
    private EmployeeDTO employee;

    @NotNull
    private VehicleDTO vehicle;

    @NotNull
    private LocalDateTime startDateTime;

    @NotNull
    private LocalDateTime endDateTime;

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

    public LocalDateTime getStartDateTime() {
        return startDateTime;
    }

    public void setStartDateTime(LocalDateTime startDateTime) {
        this.startDateTime = startDateTime;
    }

    public LocalDateTime getEndDateTime() {
        return endDateTime;
    }

    public void setEndDateTime(LocalDateTime endDateTime) {
        this.endDateTime = endDateTime;
    }
}
