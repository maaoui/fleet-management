package pl.buczak.kacper.fleetmanagement.repository.exploatation.repair;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.repair.RecommendedRepair;

/*
    @author Kacper Buczak 
*/
@Repository
public interface RecommendedRepairRepository extends JpaRepository<RecommendedRepair, Long> {
}
