package pl.buczak.kacper.fleetmanagement.repository.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Employee;

/*
    @author Kacper Buczak 
*/
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
