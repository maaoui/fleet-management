package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import java.util.Collection;

/*
    @author Kacper Buczak 
*/
@Repository
public interface VehicleReposiory extends JpaRepository<Vehicle, Long> {

    @Query("SELECT v FROM Vehicle v join VehicleUsageTimestamp vut on v = vut.vehicle where vut.employee.id = :employeeId")
    Collection<Vehicle> findAllByEmployeeId(Long employeeId);

    @Query("SELECT v FROM Vehicle v join VehicleUsageTimestamp vut on v = vut.vehicle where vut.employee.department.id = :departmentId")
    Collection<Vehicle> findAllByDepartmentId(Long departmentId);
}
