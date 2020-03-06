package pl.buczak.kacper.fleetmanagement.repository.department;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;

/*
    @author Kacper Buczak 
*/
public interface AddressRepository extends JpaRepository<Address, Long> {
}
