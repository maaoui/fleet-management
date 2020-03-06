package pl.buczak.kacper.fleetmanagement.repository.vehicle;

import org.springframework.data.jpa.repository.JpaRepository;

/*
    @author Kacper Buczak 
*/
public interface VehicleUsageTimestampRepository extends JpaRepository<VehicleOwnerRepository, Long> {
}
