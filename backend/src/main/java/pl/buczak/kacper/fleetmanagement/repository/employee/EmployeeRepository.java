package pl.buczak.kacper.fleetmanagement.repository.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;

import java.util.Collection;

/*
    @author Kacper Buczak 
*/
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query(value = "SELECT e FROM Employee e WHERE e.email = :email")
    Employee findbyEmail(@Param("email") String email);

    @Query(value = "SELECT e FROM Employee e WHERE e.department.id = :departmentId")
    Collection<Employee> findByDepartmentId(@Param("departmentId") Long departmentId);

}
