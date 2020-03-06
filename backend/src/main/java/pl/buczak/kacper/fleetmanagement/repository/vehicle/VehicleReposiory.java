package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.Vehicle;

/*
    @author Kacper Buczak 
*/
public interface VehicleReposiory extends JpaRepository<Vehicle, Long> {
}
