package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;

/*
    @author Kacper Buczak 
*/
public interface CarPartRepository extends JpaRepository<CarPart, Long> {
}
