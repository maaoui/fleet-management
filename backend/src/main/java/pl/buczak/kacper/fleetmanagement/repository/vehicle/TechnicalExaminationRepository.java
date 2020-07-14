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

    @Query(value = "select * from technical_examination t1 " +
            "inner join (select max(examination_date) examination_date, vehicle_id from technical_examination group by vehicle_id ) t2  " +
            "on t1.vehicle_id = t2.vehicle_id and t1.examination_date = t2.examination_date where next_examination_date < :endDate",
            nativeQuery = true)
    public List<TechnicalExamination> findAllWhereNextExaminationDateInTwoWeeks(@Param("endDate") Date endDate);


}
