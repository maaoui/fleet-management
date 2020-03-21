package pl.buczak.kacper.fleetmanagement.repository.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Department;

import java.util.Collection;

/*
    @author Kacper Buczak 
*/
@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

    @Query("SELECT d FROM Department d WHERE d.region.id =  :regionId")
    Collection<Department> findDepartmentsByRegionId(@Param("regionId") Long regionId);
}
