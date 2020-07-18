package pl.buczak.kacper.fleetmanagement.repository.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.buczak.kacper.fleetmanagement.entity.dao.employee.Role;

/*
    @author Kacper Buczak 
*/
public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query(value = "SELECT r FROM Role r where r.name = :roleName")
    Role findByName(@Param("roleName") String roleName);

    @Query(value = "SELECT r FROM Role r where r.name = 'ROLE_EMPLOYEE'")
    Role findDefaultUserRole();

}
