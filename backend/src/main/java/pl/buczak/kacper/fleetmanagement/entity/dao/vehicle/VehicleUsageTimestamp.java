package pl.buczak.kacper.fleetmanagement.entity.dao.vehicle;

import com.sun.istack.NotNull;
import pl.buczak.kacper.fleetmanagement.entity.dao.BaseEntity;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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
    private LocalDateTime startDateTime;

    @NotNull
    @Column(name = "end_date_time")
    private LocalDateTime endDateTime;


}
