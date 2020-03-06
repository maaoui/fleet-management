package pl.buczak.kacper.fleetmanagement.repository.exploatation.expense;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.buczak.kacper.fleetmanagement.entity.dao.exploatation.expense.FuelExpense;

/*
    @author Kacper Buczak 
*/
public interface FuelExpenseRepository extends JpaRepository<FuelExpense, Long> {
}
