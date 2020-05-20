package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import com.sun.istack.NotNull;
import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;

import javax.persistence.*;
import java.util.Date;

/*
    @author Kacper Buczak 
*/
@Entity
@Table(name = "vehicle_usage_timestamp")
public class VehicleUsageTimestamp extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    private Employee employee;

    @ManyToOne(fetch = FetchType.LAZY)
    private Vehicle vehicle;

    @Column(name = "start_date_time")
    @NotNull
    private Date startDateTime;

    @NotNull
    @Column(name = "end_date_time")
    private Date endDateTime;

    public VehicleUsageTimestamp() {
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
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
