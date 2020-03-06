package pl.buczak.kacper.fleetmanagement.repository.insurance;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.insurance.Insurance;

/*
    @author Kacper Buczak 
*/
public interface InsuranceRepository extends JpaRepository<Insurance, Long> {
}
