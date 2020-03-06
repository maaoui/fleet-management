package pl.buczak.kacper.fleetmanagement.repository.exploatation.expense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.FuelExpense;

/*
    @author Kacper Buczak 
*/
@Repository
public interface FuelExpenseRepository extends JpaRepository<FuelExpense, Long> {
}
