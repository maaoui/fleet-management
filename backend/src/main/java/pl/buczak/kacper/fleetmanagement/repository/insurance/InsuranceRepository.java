package pl.buczak.kacper.fleetmanagement.repository.insurance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.insurance.Insurance;

import java.util.Optional;

/*
    @author Kacper Buczak 
*/
@Repository
public interface InsuranceRepository extends JpaRepository<Insurance, Long> {


    @Query("SELECT i from Insurance i where i.vehicle.id = :vehicleId")
    Optional<Insurance> findInsuranceByVehicleId(Long vehicleId);
}
