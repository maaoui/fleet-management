package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.CarPart;

/*
    @author Kacper Buczak 
*/
@Repository
public interface CarPartRepository extends JpaRepository<CarPart, Long> {
}
