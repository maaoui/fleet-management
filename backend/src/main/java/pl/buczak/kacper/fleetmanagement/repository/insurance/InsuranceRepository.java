package pl.buczak.kacper.fleetmanagement.repository.insurance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.insurance.Insurance;

/*
    @author Kacper Buczak 
*/
@Repository
public interface InsuranceRepository extends JpaRepository<Insurance, Long> {
}
