package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.VehicleOwner;

/*
    @author Kacper Buczak 
*/
@Repository
public interface VehicleOwnerRepository extends JpaRepository<VehicleOwner, Long> {
}
