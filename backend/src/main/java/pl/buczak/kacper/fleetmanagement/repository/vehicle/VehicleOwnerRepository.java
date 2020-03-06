package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.VehicleOwner;

/*
    @author Kacper Buczak 
*/
public interface VehicleOwnerRepository extends JpaRepository<VehicleOwner, Long> {
}
