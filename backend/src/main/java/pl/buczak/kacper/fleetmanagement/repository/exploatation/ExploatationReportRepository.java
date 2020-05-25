package pl.buczak.kacper.fleetmanagement.repository.exploatation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.ExploatationReport;

/*
    @author Kacper Buczak 
*/
@Repository
public interface ExploatationReportRepository extends JpaRepository<ExploatationReport, Long> {


    @Query("SELECT er FROM ExploatationReport er WHERE er.vehicle.id =:vehicleId")
    ExploatationReport getExploatationReportByVehicleId(@Param("vehicleId") Long vehicleId);
}
