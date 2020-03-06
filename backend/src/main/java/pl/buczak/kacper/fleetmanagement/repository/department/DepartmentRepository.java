package pl.buczak.kacper.fleetmanagement.repository.department;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Department;

/*
    @author Kacper Buczak 
*/
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
