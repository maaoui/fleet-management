package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

import java.util.Collection;

/*
    @author Kacper Buczak 
*/
@Repository
public interface VehicleReposiory extends JpaRepository<Vehicle, Long> {

    @Query("SELECT v FROM Vehicle v left join Employee e on v.currentEmployee.id = e.id where e.id =: employeeId")
    Collection<Vehicle> findAllByEmployeeId(Long employeeId);

    @Query("SELECT v FROM Vehicle v left join Employee e on v.currentEmployee.id = e.id where e.department.id =:departmentId")
    Collection<Vehicle> findAllByDepartmentId(Long departmentId);

    @Modifying
    @Query("UPDATE Vehicle v SET v.currentEmployee = NULL where v.currentEmployee.id =:employeeId")
    void removeCurrentEmployeeFromAllVehicles(Long employeeId);

}
