package pl.buczak.kacper.fleetmanagement.repository.workshop;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;

/*
    @author Kacper Buczak 
*/
public interface WorkshopRepository extends JpaRepository<Workshop, Long> {
}
