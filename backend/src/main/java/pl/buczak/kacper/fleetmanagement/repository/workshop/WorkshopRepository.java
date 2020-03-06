package pl.buczak.kacper.fleetmanagement.repository.workshop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.workshop.Workshop;

/*
    @author Kacper Buczak 
*/
@Repository
public interface WorkshopRepository extends JpaRepository<Workshop, Long> {
}
