package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.TechnicalExamination;

/*
    @author Kacper Buczak 
*/
public interface TechnicalExaminationRepository extends JpaRepository<TechnicalExamination, Long> {
}
