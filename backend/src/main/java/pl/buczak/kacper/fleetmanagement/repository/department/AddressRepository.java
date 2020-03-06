package pl.buczak.kacper.fleetmanagement.repository.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Address;

/*
    @author Kacper Buczak 
*/
@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}
