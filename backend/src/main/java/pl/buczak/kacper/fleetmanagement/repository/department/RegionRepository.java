package pl.buczak.kacper.fleetmanagement.repository.department;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.department.Region;

/*
    @author Kacper Buczak 
*/
public interface RegionRepository extends JpaRepository<Region, Long> {
}
