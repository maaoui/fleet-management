package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.vehicle.TechnicalExamination;

import java.util.Date;
import java.util.List;

/*
    @author Kacper Buczak 
*/
@Repository
public interface TechnicalExaminationRepository extends JpaRepository<TechnicalExamination, Long> {

    @Query("SELECT t from TechnicalExamination t ORDER BY t.nextExaminationDate")
    public List<TechnicalExamination> findAllSortedByDate();

    @Query("SELECT t from TechnicalExamination t WHERE t.vehicle.id =:vehicleId ORDER BY t.nextExaminationDate")
    public List<TechnicalExamination> findAllByVehicleId(Long vehicleId);

    @Query("SELECT t from TechnicalExamination t WHERE t.nextExaminationDate BETWEEN :startDate AND :endDate")
    public List<TechnicalExamination> findAllBetweenDates(@Param("startDate") Date startDate, @Param("endDate") Date endDate);
}
