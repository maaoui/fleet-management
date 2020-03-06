package pl.buczak.kacper.fleetmanagement.repository.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;

/*
    @author Kacper Buczak 
*/
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
