package pl.buczak.kacper.fleetmanagement.repository.exploatation;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;

/*
    @author Kacper Buczak 
*/
public interface ExploatationReportRepository extends JpaRepository<ExploatationReport, Long> {
}
